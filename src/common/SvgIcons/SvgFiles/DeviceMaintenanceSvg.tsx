import { svgProps, defaultProps } from './_svgBase'

const DeviceMaintenance = (props: svgProps): JSX.Element => {
  const { size = defaultProps.size, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        height={props.height || size}
        width={props.width || size}
        fill={color}
        viewBox="-10 0 1387 1024"
      >
        <path d="M265 1024v0v0q-30 0 -52 -22t-22 -52v0v-1v0v-321v0v0q0 -31 22 -53t52 -22v0v0h37v-24q1 -25 19 -42.5t43 -17.5t43 17.5t19 42.5v0v24h50v-24q0 -25 18 -42.5t44 -17.5q25 0 43 17.5t18 42.5v0v24h409v-197v-1.5v-0.5q0 -26 18 -44t44 -18q25 0 43.5 18t18.5 44v0.5 v1.5v0v197h36v-197q1 -25 19 -43t43 -18q26 0 44 18t18 43v0v197q31 1 53 22.5t22 52.5v0v0v0v321v0v0q0 31 -22 53t-53 22v0h-1027zM1193 690v198q0 15 11 26t26 11q16 0 27 -11t11 -26v0v-198q0 -16 -11 -27t-27 -11q-15 0 -26 11t-11 27v0zM476 789q0 25 18 43.5t44 18.5 q25 0 43 -18.5t18 -43.5q0 -26 -18 -44t-43 -18v0h-1v0v0v0q-25 0 -43 18t-18 43v1v0v0v0zM302 789q0 25 18.5 43.5t43.5 18.5q26 0 44 -18.5t18 -43.5q0 -26 -18 -44t-44 -18v0v0v0v0v0q-25 0 -43.5 18t-18.5 43v1v0v0v0zM63 575q-28 -7 -45.5 -29t-17.5 -51q0 -18 7.5 -34 t19.5 -28v0l215 -196q3 -3 5 -6.5t2 -8.5q0 -1 -0.5 -2.5t-0.5 -3.5v1q-5 -13 -7.5 -27.5t-2.5 -30.5q0 -32 11.5 -61t31.5 -51h-1q23 -22 53 -34.5t63 -12.5q18 0 34.5 3.5t32.5 9.5h-1q5 3 8.5 8t3.5 11q0 4 -1.5 8t-4.5 7l-79 78q-3 3 -4.5 7t-1.5 8t1.5 8t4.5 7l34 34 q3 3 7 4.5t8 1.5t8 -1.5t7 -4.5v0l79 -79q2 -3 6 -4.5t8 -1.5h2h2v0q5 1 9 3.5t6 7.5v0q6 14 9.5 30.5t3.5 34.5q0 34 -12.5 64t-34.5 53v0q-20 19 -46.5 30t-56.5 11q-2 0 -3 -0.5t-2 -0.5v0q-16 0 -31.5 -2t-29.5 -6h1q-1 0 -2.5 -0.5t-2.5 -0.5q-4 0 -8 2t-7 5v0 l-198 215q-12 13 -27.5 20.5t-34.5 7.5v0v0v0h-0.5h-0.5q-5 0 -10 -1l-10 -2h1v0zM53 466q-5 6 -8.5 13.5t-3.5 15.5q0 17 12 29t30 12q17 0 29 -12t12 -29q0 -12 -6.5 -22t-16.5 -15h-1q-3 -2 -8 -3t-9 -1v0h-1v0q-8 0 -15.5 3t-13.5 9v0v0z" />
      </svg>
    </>
  )
}

export default DeviceMaintenance
