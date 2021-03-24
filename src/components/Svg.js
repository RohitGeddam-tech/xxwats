import React from "react";

const Svg = ({
  className,
  imagegradient1,
  imagegradient0,
  imagename,
  title,
}) => {
  return (
    <svg
      width="240"
      height="44"
      viewBox="0 0 240 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9346 14.5287H14.5676L16.042 12.2976L17.5072 14.5287H19.1869L16.91 11.2007L19.0936 8.02124H17.4606L16.0795 10.1315L14.7076 8.02124H13.0279L15.2115 11.2192L12.9346 14.5287Z"
        class={className}
      />
      <path
        d="M25.9863 14.5287H27.6193L29.0937 12.2976L30.559 14.5287H32.2387L29.9618 11.2007L32.1453 8.02124H30.5123L29.1312 10.1315L27.7593 8.02124H26.0796L28.2632 11.2192L25.9863 14.5287Z"
        class={className}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.4506 36.2352L26.0623 36.1709L22.8958 31.4015L19.7294 36.1709L12.341 36.2352L22.8379 20.7058L33.4506 36.2352Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.7334 20.7058V31.4882L19.6607 36.1708L12.341 36.2352L22.7334 20.7058Z"
        class={imagegradient0}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.7334 20.7058V31.4999L26.003 36.1709L33.4506 36.2352L22.7334 20.7058Z"
        class={imagegradient1}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.981 36.1712L34.3001 36.2353L38.9716 22L25.981 36.1712Z"
        class={imagename}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.4858 36.1712L11.1667 36.2353L6.49526 22L19.4858 36.1712Z"
        class={imagename}
      />
      <path
        d="M83.5555 35.9598C87.1152 35.9598 89.4163 32.5953 89.4163 28.6214V28.5805C89.4163 24.6086 87.1419 21.2861 83.5821 21.2861C80.0235 21.2861 77.6947 24.6495 77.6947 28.6214V28.6623C77.6947 32.6341 79.9702 35.9598 83.5555 35.9598ZM229.011 35.9178C231.767 35.9178 233.747 34.3379 233.747 31.905V31.8641C233.747 29.6977 232.302 28.5416 229.224 27.8513C226.174 27.1831 225.451 26.433 225.451 25.0954V25.0545C225.451 23.7788 226.602 22.7654 228.395 22.7654C229.84 22.7654 231.124 23.2301 232.409 24.3044L233.319 23.0685C231.9 21.9135 230.455 21.327 228.448 21.327C225.825 21.327 223.898 22.9678 223.898 25.1971V25.2381C223.898 27.5691 225.371 28.6214 228.556 29.3306C231.446 29.96 232.141 30.708 232.141 32.0257V32.0666C232.141 33.4671 230.91 34.4805 229.064 34.4805C227.137 34.4805 225.745 33.8123 224.3 32.4726L223.337 33.6476C224.996 35.1677 226.816 35.9178 229.011 35.9178ZM112.603 35.8171H113.914L117.715 24.3044L121.542 35.8171H122.853L127.803 21.5295H126.171L122.21 33.3433L118.411 21.4886H117.126L113.299 33.3433L109.365 21.5295H107.653L112.603 35.8171ZM53.5547 35.7153H63.2416V34.255H55.8824L59.5753 30.8916C62.0373 28.7221 63.0818 27.4464 63.0818 25.3807V25.3398C63.0818 23.0276 61.2881 21.327 58.7994 21.327C56.3641 21.327 55.0532 22.4412 53.7955 24.3453L54.9456 25.1971C56.0699 23.6172 57.0867 22.7654 58.6662 22.7654C60.1913 22.7654 61.4756 23.8197 61.4756 25.4825C61.4756 26.8977 60.6997 27.994 58.5852 29.939L53.5547 34.4805V35.7153ZM173.184 35.7153H174.763V23.0087H179.42V21.5295H168.528V23.0087H173.184V35.7153ZM200.598 35.7153H202.177V23.0087H206.834V21.5295H195.941V23.0087H200.598V35.7153ZM139.909 35.7153H141.514L143.147 31.9659H150.694L152.327 35.7153H154.013L147.697 21.4278H146.224L139.909 35.7153ZM83.5821 34.4994C80.9869 34.4994 79.3275 31.7214 79.3275 28.6214V28.5805C79.3275 25.4605 80.9603 22.7454 83.5555 22.7454C86.1251 22.7454 87.7845 25.5203 87.7845 28.6214V28.6623C87.7845 31.7634 86.1784 34.4994 83.5821 34.4994ZM143.763 30.5276L146.947 23.2909L150.078 30.5276H143.763Z"
        class={title}
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="20.9043"
          y1="31.2417"
          x2="15.8786"
          y2="36.1524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAEB6D" />
          <stop offset="0.577386" stop-color="#CFC24E" />
          <stop offset="1" stop-color="#885800" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="24.7816"
          y1="31.3154"
          x2="29.7992"
          y2="36.3132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAEB6D" />
          <stop offset="0.577386" stop-color="#CFC24E" />
          <stop offset="1" stop-color="#885800" />
        </linearGradient>

        <linearGradient
          id="paint2_linear"
          x1="61.822"
          y1="97.5843"
          x2="47.8297"
          y2="111.775"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#383839" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="77.0733"
          y1="97.4138"
          x2="91.0318"
          y2="111.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#383839" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
