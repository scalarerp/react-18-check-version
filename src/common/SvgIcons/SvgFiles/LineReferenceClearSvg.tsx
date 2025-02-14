import { defaultProps, svgProps } from './_svgBase'

const LineReferenceClearSvg = (props: svgProps): JSX.Element => {
  const { width, height, size = 32, color = defaultProps.color } = props

  return (
    <>
      <svg
        {...defaultProps}
        {...props}
        width={width || size}
        height={height || size}
        fill={color}
        viewBox="0 0 35 36"
      >
        <defs>
          <polygon
            id="path-1"
            points="0.000556818182 0.644397727 34.3633977 0.644397727 34.3633977 35 0.000556818182 35"
          ></polygon>
        </defs>
        <g
          id="Desktop"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g transform="translate(0.000000, -3.000000)">
            <path
              d="M30,17 L30,23.5281527 C30,23.8872011 29.712766,24.1817839 29.3617021,24.1817839 C29.0106383,24.1817839 28.7234043,23.8872011 28.7234043,23.5281527 L28.7234043,19.8397464 L20.3138298,28.4487477 C19.3005319,29.4769318 18.2553191,30 17.2021277,30 C17.106383,30 17.0026596,30 16.8989362,29.9828636 C15.4069149,29.8441404 14.4654255,28.6853933 14.25,28.3916264 C13.875,27.9836168 10.4840426,24.3441717 8.00984043,21.8145126 C7.34042553,21.1298726 6.71010638,20.8026489 6.14361702,20.8597703 C5.36968085,20.933212 4.85904255,21.6839495 4.85026596,21.6921097 L4.75531915,21.8145126 L0,26.7595882 L0,24.4339338 L3.57446809,20.7137028 C3.78989362,20.4117758 4.6356383,19.3746155 5.96808511,19.2358923 C7.03723404,19.1298098 8.10638298,19.6031009 9.14361702,20.6639257 C11.7606383,23.3412843 15.4069149,27.2655201 15.4468085,27.306321 L15.5265957,27.4042433 C15.5265957,27.4132195 16.1409574,28.2855439 17.0585106,28.3589856 C17.7207447,28.4242672 18.4308511,28.0578746 19.1800532,27.2900006 L28.2367021,18.0290001 L27.9861702,18.2974703 L23.6170213,18.2974703 C23.2659574,18.2974703 22.9787234,18.0118637 22.9787234,17.6536313 C22.9787234,17.2864227 23.2659574,17 23.6170213,17 L30,17 Z"
              fill={color}
            ></path>
            <polygon
              id="Fill-6"
              fill={color}
              points="12 13 22 13 22 3 12 3"
            ></polygon>
            <polygon
              id="Stroke-8"
              stroke={color}
              points="13 16 21 16 21 13 13 13"
            ></polygon>
          </g>
        </g>
      </svg>
    </>
  )
}

export default LineReferenceClearSvg
