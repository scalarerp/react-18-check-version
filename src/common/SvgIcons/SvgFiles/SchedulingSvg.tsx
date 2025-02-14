import { defaultProps, svgProps } from './_svgBase'
//unie900 de icomoon

const SchedulingSvg = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={size}
        height={size}
        fill={color}
        viewBox="-10 0 1002 1024"
      >
        <path
          d="M128 1024q-53 0 -90.5 -37.5t-37.5 -90.5v0v-683q0 -53 37.5 -90.5t90.5 -37.5v0v-42q0 -18 12.5 -30.5t30.5 -12.5q17 0 29.5 12.5t12.5 30.5v0v42h555v-42q0 -18 12.5 -30.5t29.5 -12.5q18 0 30.5 12.5t12.5 30.5v0v42q53 0 90.5 37.5t37.5 90.5v0l1 569v6.5t-1 6.5v0
v-3.5v-2.5v0v0q0 -49 -19 -91q-18 -43 -50 -75t-74 -50q-43 -19 -92 -19q-48 0 -91 19q-43 18 -74.5 50t-50.5 75q-18 42 -18 91q0 48 18 91q18 42 49.5 74t73.5 50q42 19 90 20v0h-3.5h-2.5v0v0v0h-609zM341 810q0 18 12.5 30.5t30.5 12.5t30.5 -12.5t12.5 -30.5
q0 -17 -12.5 -29.5t-30.5 -12.5v0q-18 0 -30.5 12.5t-12.5 29.5v0zM128 810q0 18 12.5 30.5t30.5 12.5q17 0 29.5 -12.5t12.5 -30.5q0 -17 -12.5 -29.5t-29.5 -12.5v0q-18 0 -30.5 12.5t-12.5 29.5v0zM341 597q0 18 12.5 30.5t30.5 12.5t30.5 -12.5t12.5 -30.5t-12.5 -30.5
t-30.5 -12.5v0q-18 0 -30.5 12.5t-12.5 30.5v0zM128 597q0 18 12.5 30.5t30.5 12.5q17 0 29.5 -12.5t12.5 -30.5t-12.5 -30.5t-29.5 -12.5v0q-18 0 -30.5 12.5t-12.5 30.5v0zM768 384q0 18 12.5 30.5t29.5 12.5q18 0 30.5 -12.5t12.5 -30.5t-12.5 -30.5t-30.5 -12.5v0
q-17 0 -29.5 12.5t-12.5 30.5v0zM554 384q0 18 12.5 30.5t30.5 12.5t30.5 -12.5t12.5 -30.5t-12.5 -30.5t-30.5 -12.5v0q-18 0 -30.5 12.5t-12.5 30.5v0zM341 384q0 18 12.5 30.5t30.5 12.5t30.5 -12.5t12.5 -30.5t-12.5 -30.5t-30.5 -12.5v0q-18 0 -30.5 12.5t-12.5 30.5v0
zM128 384q0 18 12.5 30.5t30.5 12.5q17 0 29.5 -12.5t12.5 -30.5t-12.5 -30.5t-29.5 -12.5v0q-18 0 -30.5 12.5t-12.5 30.5v0zM554 789q0 -79 56.5 -135.5t135.5 -56.5q80 0 136 56.5t56 135.5q0 80 -56 136t-136 56v0q-79 0 -135 -56t-57 -136v0zM725 661v128q0 9 6.5 15
t14.5 6v0q0 5 2 9t5 6v0q3 3 6.5 5t8.5 2v0v0h85q9 0 15 -6.5t6 -15.5q0 -8 -6 -14.5t-15 -6.5v0h-85v-128q0 -9 -6.5 -15t-15.5 -6q-8 0 -14.5 6t-6.5 15v0v0z"
        />
      </svg>
    </>
  )
}

export default SchedulingSvg
