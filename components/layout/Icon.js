export default function Icon({ name, size = 30, fill, className = "" }) {
  switch (name) {
    case "menu":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 22 22`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path
            stroke={fill}
            stroke-linecap="round"
            stroke-width="1.4"
            d="M1.7 5.3h18.6m-18.6 5h18.6m-18.6 5h18.6"
          />
        </svg>
      );
    case "ticket":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 22 22`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <g clip-path="url(#a)">
            <path d="m21.84 8.147-2.852-2.854a.538.538 0 0 0-.761 0l-.38.38a1.062 1.062 0 0 1-1.522 0 1.062 1.062 0 0 1 0-1.52l.38-.381a.538.538 0 0 0 0-.761L13.852.158a.538.538 0 0 0-.76 0L.156 13.093a.538.538 0 0 0 0 .76l7.989 7.99c.21.21.55.21.76 0L21.842 8.908a.538.538 0 0 0 0-.76ZM8.527 20.7 1.3 13.473l8.749-8.75 1.332 1.331 5.896 5.897-8.75 8.75Zm9.51-9.51-6.633-6.634-.594-.595L13.472 1.3l2.092 2.093a2.16 2.16 0 0 0 0 3.043 2.16 2.16 0 0 0 3.044 0L20.7 8.528l-2.663 2.663Z" />
            <path d="M8.303 17.373a.456.456 0 0 0 .645 0l5.129-5.13a.456.456 0 1 0-.646-.645l-5.128 5.13a.457.457 0 0 0 0 .645ZM6.465 14.89a.457.457 0 0 0 .646.645l5.128-5.13a.456.456 0 1 0-.646-.644L6.466 14.89ZM10.4 7.922a.457.457 0 0 0-.645 0L4.627 13.05a.456.456 0 1 0 .645.645l5.129-5.13a.456.456 0 0 0 0-.644Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h22v22H0z" />
            </clipPath>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 200 200`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <rect
            x="94"
            y="0"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.4214 100)"
            width="12"
            height="200"
          />
          <rect
            x="0"
            y="94"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -41.4214 100)"
            width="200"
            height="12"
          />{" "}
        </svg>
      );
    case "down":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 22 22`}
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M16.822 7.874a.608.608 0 0 1 0 .86l-5.37 5.37a.68.68 0 0 1-.962 0l-5.312-5.31a.608.608 0 0 1 .86-.861l4.933 4.932 4.99-4.99a.608.608 0 0 1 .86 0Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 97 97"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M64.4,16.1h9.1V0.7C71.9,0.5,66.5,0,60.2,0C47,0,38,8,38,22.8v13.6H23.5v17.2H38V97h17.8V53.6h13.9L72,36.4H55.8V24.5C55.8,19.5,57.2,16.1,64.4,16.1L64.4,16.1z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 60 60"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <g id="instagram">
            <path d="M41.2,0H18.8C8.4,0,0,8.4,0,18.8v22.5C0,51.6,8.4,60,18.8,60h22.5C51.6,60,60,51.6,60,41.2V18.8C60,8.4,51.6,0,41.2,0zM54.4,41.2c0,7.2-5.9,13.1-13.1,13.1H18.8c-7.2,0-13.1-5.9-13.1-13.1V18.8c0-7.2,5.9-13.1,13.1-13.1h22.5c7.2,0,13.1,5.9,13.1,13.1V41.2z" />
            <path d="M30,15c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S38.3,15,30,15z M30,39.4c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4C39.4,35.2,35.2,39.4,30,39.4z" />
            <circle cx="46.1" cy="13.9" r="2" />
          </g>
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M4.5,6.7v12.9H0.2V6.7H4.5z M4.8,2.7c0,0.6-0.2,1.2-0.7,1.6s-1,0.6-1.8,0.6h0c-0.7,0-1.3-0.2-1.7-0.6S0,3.3,0,2.7C0,2,0.2,1.5,0.7,1.1s1-0.6,1.8-0.6s1.3,0.2,1.7,0.6C4.6,1.5,4.8,2,4.8,2.7z M20,12.2v7.4h-4.3v-6.9c0-0.9-0.2-1.6-0.5-2.1c-0.4-0.5-0.9-0.8-1.6-0.8c-0.5,0-1,0.1-1.4,0.4c-0.4,0.3-0.6,0.7-0.8,1.1c-0.1,0.3-0.1,0.6-0.1,1.1v7.2H6.9c0-3.5,0-6.3,0-8.4s0-3.4,0-3.9l0-0.6h4.3v1.9h0c0.2-0.3,0.4-0.5,0.5-0.7c0.2-0.2,0.4-0.4,0.7-0.7s0.7-0.4,1.1-0.6c0.4-0.1,0.9-0.2,1.5-0.2c1.5,0,2.7,0.5,3.6,1.5C19.5,8.8,20,10.3,20,12.2z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 512 512"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M376.33,202.32q0,42.48-20.65,82Q334.45,326.19,296.11,351,254.23,378.69,200,378.69q-51.91,0-95-27.72,6.5.58,14.75.59,43,0,77.27-26.55-20.65,0-36.28-12.09a61.59,61.59,0,0,1-21.53-30.38,110.83,110.83,0,0,0,11.21.59,78.55,78.55,0,0,0,16.51-1.77,62.41,62.41,0,0,1-35.39-21.82,59.41,59.41,0,0,1-14.15-38.93v-1.18a58.4,58.4,0,0,0,27.72,8.26,68.63,68.63,0,0,1-20.05-22.42,60.08,60.08,0,0,1,1.17-60.75A173.23,173.23,0,0,0,253.64,209.4a85.6,85.6,0,0,1-1.18-14.15,61.36,61.36,0,0,1,8.26-31,60.61,60.61,0,0,1,22.41-22.71,59.79,59.79,0,0,1,30.68-8.26,59,59,0,0,1,25.06,5.31,70,70,0,0,1,20.35,14.16A126.12,126.12,0,0,0,398.74,138q-7.08,21.83-27.13,34.21a132.64,132.64,0,0,0,35.39-10,136.14,136.14,0,0,1-31.26,32.45A35.3,35.3,0,0,1,376.33,202.32Z" />{" "}
        </svg>
      );
    case "clock":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 22 22"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M11 21C5.486 21 1 16.514 1 11S5.486 1 11 1s10 4.486 10 10-4.486 10-10 10Zm0-18.76c-4.83 0-8.76 3.93-8.76 8.76s3.93 8.759 8.76 8.759 8.759-3.93 8.759-8.76-3.929-8.758-8.76-8.758Z" />
          <path d="M14.87 11.847h-4.49V4.381a.62.62 0 1 1 1.24 0v6.225h3.25a.62.62 0 1 1 0 1.241Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 22 22"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M21.311 10.592a.777.777 0 0 0-.04-.043l-5.37-5.37a.608.608 0 0 0-.86.86l4.332 4.331H1.138a.608.608 0 1 0 0 1.217h18.336l-4.375 4.374a.608.608 0 1 0 .86.86l5.313-5.31a.675.675 0 0 0 .04-.919Z" />
        </svg>
      );
    case "home":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <g>
            <path
              class="st0"
              d="M0.5,19v0.6c2.5,0.1,6,0.5,8.2,2.3c1.8,1.5,2.8,4,2.8,7.7v37.1c0,7-0.8,10.3-3,11.8C6.3,80,1.5,80.2,0,80.4
			V81h25.2v-0.6c-1.6-0.1-7.8-0.7-9.4-2c-2-1.6-3.1-4.8-3.1-11.7V24.5l20.1,42.9c1.7,3.9,3.7,9.1,4.8,12.6h1l5-11.9L20.4,19H0.5
			L0.5,19z"
            />
            <path
              class="st0"
              d="M99,64.7c-3.5,7.9-10.1,14.3-21.2,14.3C64.2,78.9,56,66.4,56,50c0-20.6,7.6-31,18.8-31s18.7,10.9,22,21.4h0.8
			L97.3,18h-0.8L93,22.9c-2.7-2.5-8.2-5.2-15.9-5.2c-18.3,0-32,14.3-32,33s12.2,31.6,30.1,31.6c13.8,0,21.1-8.6,24.8-17.1L99,64.7
			L99,64.7z"
            />
            <path
              class="st0"
              d="M80.5,51.8l1.5,0.7l3.8-2.5L82,47.5l-1.5,0.7c-0.9,0.4-1.8-0.5-1.4-1.4l0.7-1.5l-2.5-3.8l-2.5,3.8l0.7,1.5
			c0.4,0.9-0.5,1.8-1.4,1.4l-1.5-0.7L68.9,50l3.8,2.5l1.5-0.7c0.9-0.4,1.8,0.5,1.4,1.4l-0.7,1.5l2.5,3.8l2.5-3.8l-0.7-1.5
			C78.7,52.3,79.6,51.3,80.5,51.8L80.5,51.8z"
            />
          </g>
        </svg>
      );
    case "quote":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 512 512"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path
            d="M67.12,164.54c14.89-23.4,49.99-56.37,99.97-85.09l7.45,10.63C117.1,135.82,97.96,209.21,117.1,212.4
	c26.6,2.13,53.19,10.63,74.46,30.85c43.6,43.6,43.6,112.74,1.06,157.41c-43.6,42.54-112.74,42.54-155.28,0
	C-29.67,333.64,29.89,216.64,67.12,164.54z M347.73,164.54c14.88-23.4,49.99-56.37,99.97-85.09l7.45,10.63
	c-57.43,45.74-76.57,119.12-57.43,122.31c26.59,2.13,53.17,10.63,74.44,30.85c43.61,43.6,43.61,112.74,1.07,157.41
	c-43.61,42.54-112.74,42.54-155.29,0C250.94,333.64,310.5,216.64,347.73,164.54z"
          />
        </svg>
      );
    case "download":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox="0 0 104 104"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path
            d="M98.4,43.7l-45,44.2c-0.6,0.6-1.3,0.8-2.1,0.8s-1.5-0.3-2.1-0.8l-45-44.2c-1.2-1.1-1.2-3,0-4.1
		c1.2-1.1,3-1.1,4.2,0l39.9,39.2V2.2c0-0.8,1.3-1.5,3-1.5s3,0.7,3,1.5v76.5l39.9-39.2c1.2-1.1,3-1.1,4.2,0
		C99.5,40.7,99.5,42.6,98.4,43.7z"
          />
          <path d="M2.2,100.7c0-1.7,1.3-3,3-3h94.3c1.7,0,3,1.3,3,3s-1.3,3-3,3H5.2C3.6,103.7,2.2,102.4,2.2,100.7z" />
        </svg>
      );
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={className}
          width={size}
          height={size}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      );
    case "reload":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={className}
          width={size}
          height={size}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      );
    case "pin":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 24 24`}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          focusable={false}
        >
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      );
    default:
      return "⚠️";
  }
}
