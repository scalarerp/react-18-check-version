import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from 'router'
import { useInterval } from 'usehooks-ts'
import {
  globalStore,
  handleCheckVersion,
  reloadToNewVersion,
} from 'store/globalStore'

const App = () => {
  const { version, versionState } = globalStore()

  useInterval(handleCheckVersion, 60000)

  const isReloadApp = versionState === 'reloadApp'

  useEffect(() => {
    if (isReloadApp) {
      console.log('isReloadApp')
    }
  }, [isReloadApp])

  return (
    <>
      <h1>version:{version}</h1>
      {versionState === 'hasNew' && (
        <>
          <button onClick={reloadToNewVersion}>Atualizar</button>
        </>
      )}
      <div style={{ backgroundColor: 'yellow' }}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}
export default App

