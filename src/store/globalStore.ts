import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

import { immer } from 'zustand/middleware/immer'

interface IGlobalStore {
  version: string
  versionState: 'normal' | 'hasNew' | 'reloadApp'
  Error?: string
  ErrorName?: string
}

interface IGlobalStoreActions {
  clearAll: () => void
}

const initialValues: IGlobalStore = {
  versionState: 'normal',
  version: '',
  Error: undefined,
  ErrorName: undefined,
}

export const globalStore = create<IGlobalStore & IGlobalStoreActions>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          ...initialValues,
          clearAll: () => {
            set(() => initialValues)
          },
        }),

        {
          name: `global_Store`,
          partialize: (state) => ({ ...state }),
          storage: createJSONStorage(() => localStorage),
        }
      )
    ),
    { name: 'global_Store' }
  )
)

export const handleCheckVersion = async () => {
  const newV = await c()
  const { version, versionState } = globalStore.getState()
  if (version !== newV) {
    console.log(`newVersion:${newV} , oldVersion: ${version}`)
    globalStore.setState({ versionState: 'hasNew' })

    if (versionState === 'reloadApp' || version === '') {
      globalStore.setState({ version: newV, versionState: 'normal' })
    }
  }
}

export const reloadToNewVersion = async () => {
  globalStore.setState({ versionState: 'reloadApp' })
  window.location.reload()
}

const c = async (): Promise<string> => {
  const response = await fetch('./version.json', { cache: 'no-cache' })
  const { version } = await response.json()
  return `${version}`
}

