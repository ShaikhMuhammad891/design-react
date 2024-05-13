export const HeaderLogo = ({ width, height, className }) => {
  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        // width={180}
        // height={59}
        viewBox="0 0 180 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_205_23)">
          <path
            d="M23.2709 37.6609C20.7203 40.184 16.4006 40.174 15.1942 36.8113C14.958 36.1529 14.7691 35.476 14.6302 34.7852C14.0631 31.9649 14.3542 29.0416 15.4666 26.3849C16.579 23.7283 18.4629 21.4577 20.8798 19.8601C23.2969 18.2625 26.1385 17.4098 29.0454 17.4098C31.9523 17.4098 34.7939 18.2625 37.2109 19.8601C39.6279 21.4577 41.5117 23.7283 42.6241 26.385C43.7366 29.0416 44.0276 31.9649 43.4605 34.7852C43.3216 35.476 43.1328 36.1529 42.8965 36.8113C41.6901 40.174 37.3704 40.184 34.8198 37.6609L30.8826 33.7662C30.5064 33.3941 30.5453 32.7804 30.649 32.2643C30.7121 31.9506 30.6797 31.6254 30.5559 31.3298C30.4322 31.0343 30.2227 30.7817 29.9538 30.604C29.6849 30.4263 29.3688 30.3314 29.0454 30.3314C28.722 30.3314 28.4059 30.4263 28.137 30.604C27.8681 30.7817 27.6585 31.0343 27.5348 31.3298C27.411 31.6254 27.3786 31.9506 27.4418 32.2643C27.5455 32.7804 27.5843 33.3941 27.2081 33.7662L23.2709 37.6609Z"
            fill="url(#paint0_linear_205_23)"
          />
          <path
            d="M55.7005 34.1703H59.6511V36.4733H52.6845V24.2257H55.7005V34.1703Z"
            fill="#3A3B7B"
          />
          <path
            d="M65.0404 36.6129C64.0762 36.6129 63.2061 36.4093 62.43 36.0023C61.6659 35.5952 61.0603 35.0136 60.6135 34.2576C60.1785 33.5015 59.9609 32.6176 59.9609 31.6056C59.9609 30.6054 60.1843 29.7272 60.6311 28.9712C61.0779 28.2035 61.6893 27.6162 62.4653 27.2091C63.2414 26.802 64.1115 26.5984 65.0757 26.5984C66.0398 26.5984 66.9099 26.802 67.6859 27.2091C68.462 27.6162 69.0734 28.2035 69.5202 28.9712C69.967 29.7272 70.1904 30.6054 70.1904 31.6056C70.1904 32.6059 69.9611 33.4899 69.5026 34.2576C69.0558 35.0136 68.4385 35.5952 67.6506 36.0023C66.8746 36.4093 66.0045 36.6129 65.0404 36.6129ZM65.0404 34.0307C65.6165 34.0307 66.1045 33.8214 66.5043 33.4027C66.9158 32.9839 67.1216 32.385 67.1216 31.6056C67.1216 30.8263 66.9216 30.2274 66.5219 29.8086C66.1338 29.3899 65.6518 29.1805 65.0757 29.1805C64.4878 29.1805 63.9998 29.3899 63.6117 29.8086C63.2237 30.2157 63.0297 30.8147 63.0297 31.6056C63.0297 32.385 63.2179 32.9839 63.5942 33.4027C63.9822 33.8214 64.4643 34.0307 65.0404 34.0307Z"
            fill="#3A3B7B"
          />
          <path
            d="M75.0003 26.5984C75.694 26.5984 76.2996 26.738 76.817 27.0172C77.346 27.2963 77.7517 27.6627 78.0339 28.1163V26.738H81.0498V36.4558C81.0498 37.3514 80.8676 38.1598 80.5031 38.8809C80.1503 39.6137 79.6036 40.1953 78.8629 40.6256C78.1339 41.056 77.2226 41.2712 76.1291 41.2712C74.6711 41.2712 73.4894 40.9281 72.584 40.2418C71.6787 39.5671 71.1613 38.6483 71.032 37.4852H74.0127C74.1067 37.8574 74.3301 38.1482 74.6829 38.3576C75.0356 38.5785 75.4707 38.689 75.988 38.689C76.6112 38.689 77.105 38.5087 77.4695 38.1482C77.8458 37.7992 78.0339 37.2352 78.0339 36.4558V35.0776C77.7399 35.5311 77.3343 35.9034 76.817 36.1941C76.2996 36.4733 75.694 36.6129 75.0003 36.6129C74.189 36.6129 73.4541 36.4093 72.7957 36.0023C72.1372 35.5835 71.614 34.9961 71.226 34.2401C70.8498 33.4725 70.6616 32.5885 70.6616 31.5882C70.6616 30.5879 70.8498 29.7098 71.226 28.9537C71.614 28.1977 72.1372 27.6162 72.7957 27.2091C73.4541 26.802 74.189 26.5984 75.0003 26.5984ZM78.0339 31.6056C78.0339 30.8612 77.8223 30.2739 77.399 29.8435C76.9874 29.4132 76.4818 29.198 75.8822 29.198C75.2825 29.198 74.771 29.4132 74.3477 29.8435C73.9362 30.2623 73.7304 30.8438 73.7304 31.5882C73.7304 32.3326 73.9362 32.9258 74.3477 33.3678C74.771 33.7981 75.2825 34.0133 75.8822 34.0133C76.4818 34.0133 76.9874 33.7981 77.399 33.3678C77.8223 32.9374 78.0339 32.3501 78.0339 31.6056Z"
            fill="#3A3B7B"
          />
          <path
            d="M87.1824 36.6129C86.2183 36.6129 85.3482 36.4093 84.5722 36.0023C83.8079 35.5952 83.2023 35.0136 82.7555 34.2576C82.3205 33.5015 82.103 32.6176 82.103 31.6056C82.103 30.6054 82.3263 29.7272 82.7732 28.9712C83.22 28.2035 83.8314 27.6162 84.6074 27.2091C85.3835 26.802 86.2536 26.5984 87.2177 26.5984C88.1819 26.5984 89.052 26.802 89.828 27.2091C90.604 27.6162 91.2154 28.2035 91.6622 28.9712C92.109 29.7272 92.3325 30.6054 92.3325 31.6056C92.3325 32.6059 92.1032 33.4899 91.6446 34.2576C91.1978 35.0136 90.5805 35.5952 89.7927 36.0023C89.0167 36.4093 88.1466 36.6129 87.1824 36.6129ZM87.1824 34.0307C87.7586 34.0307 88.2465 33.8214 88.6463 33.4027C89.0579 32.9839 89.2636 32.385 89.2636 31.6056C89.2636 30.8263 89.0637 30.2274 88.6639 29.8086C88.2759 29.3899 87.7938 29.1805 87.2177 29.1805C86.6298 29.1805 86.1418 29.3899 85.7538 29.8086C85.3659 30.2157 85.1718 30.8147 85.1718 31.6056C85.1718 32.385 85.36 32.9839 85.7362 33.4027C86.1242 33.8214 86.6063 34.0307 87.1824 34.0307Z"
            fill="#3A3B7B"
          />
          <path
            d="M94.9202 25.7261C94.391 25.7261 93.956 25.5749 93.615 25.2725C93.2858 24.9584 93.1212 24.5746 93.1212 24.121C93.1212 23.6558 93.2858 23.2719 93.615 22.9695C93.956 22.6555 94.391 22.4984 94.9202 22.4984C95.4375 22.4984 95.8608 22.6555 96.19 22.9695C96.531 23.2719 96.7015 23.6558 96.7015 24.121C96.7015 24.5746 96.531 24.9584 96.19 25.2725C95.8608 25.5749 95.4375 25.7261 94.9202 25.7261ZM96.4192 26.738V36.4733H93.4034V26.738H96.4192Z"
            fill="#3A3B7B"
          />
          <path
            d="M101.091 28.1163C101.385 27.6627 101.791 27.2963 102.309 27.0172C102.826 26.738 103.432 26.5984 104.125 26.5984C104.937 26.5984 105.671 26.802 106.33 27.2091C106.988 27.6162 107.506 28.1977 107.882 28.9537C108.27 29.7098 108.464 30.5879 108.464 31.5882C108.464 32.5885 108.27 33.4725 107.882 34.2401C107.506 34.9961 106.988 35.5835 106.33 36.0023C105.671 36.4093 104.937 36.6129 104.125 36.6129C103.443 36.6129 102.838 36.4733 102.309 36.1941C101.791 35.915 101.385 35.5544 101.091 35.1125V41.1141H98.0758V26.738H101.091V28.1163ZM105.395 31.5882C105.395 30.8438 105.184 30.2623 104.76 29.8435C104.348 29.4132 103.838 29.198 103.226 29.198C102.626 29.198 102.115 29.4132 101.691 29.8435C101.28 30.2739 101.074 30.8612 101.074 31.6056C101.074 32.3501 101.28 32.9374 101.691 33.3678C102.115 33.7981 102.626 34.0133 103.226 34.0133C103.826 34.0133 104.337 33.7981 104.76 33.3678C105.184 32.9258 105.395 32.3326 105.395 31.5882Z"
            fill="#3A3B7B"
          />
          <path
            d="M113.521 36.6129C112.662 36.6129 111.898 36.4675 111.228 36.1767C110.558 35.8859 110.028 35.4905 109.641 34.9903C109.253 34.4785 109.035 33.9086 108.988 33.2805H111.969C112.004 33.6178 112.163 33.8911 112.445 34.1005C112.727 34.3099 113.074 34.4146 113.486 34.4146C113.862 34.4146 114.15 34.3448 114.349 34.2052C114.561 34.054 114.667 33.8621 114.667 33.6295C114.667 33.3503 114.52 33.1468 114.226 33.0188C113.933 32.8793 113.456 32.7281 112.797 32.5652C112.092 32.4024 111.504 32.2337 111.034 32.0593C110.564 31.8732 110.158 31.5882 109.817 31.2044C109.476 30.8089 109.306 30.2797 109.306 29.6168C109.306 29.0584 109.459 28.5525 109.764 28.0989C110.081 27.6336 110.54 27.2672 111.14 26.9997C111.751 26.7322 112.475 26.5984 113.309 26.5984C114.543 26.5984 115.514 26.9008 116.219 27.5056C116.937 28.1105 117.348 28.913 117.454 29.9133H114.667C114.62 29.576 114.467 29.3085 114.208 29.1107C113.962 28.913 113.633 28.8142 113.221 28.8142C112.868 28.8142 112.598 28.884 112.41 29.0235C112.222 29.1515 112.128 29.3318 112.128 29.5644C112.128 29.8435 112.275 30.0529 112.569 30.1925C112.874 30.3321 113.344 30.4716 113.98 30.6111C114.708 30.7973 115.302 30.9834 115.76 31.1695C116.219 31.3439 116.619 31.6347 116.96 32.0419C117.312 32.4373 117.495 32.9723 117.507 33.6469C117.507 34.2168 117.342 34.7286 117.013 35.1823C116.696 35.6242 116.231 35.9732 115.619 36.229C115.02 36.485 114.32 36.6129 113.521 36.6129Z"
            fill="#3A3B7B"
          />
          <path
            d="M128.541 26.738V36.4733H125.525V35.1474C125.219 35.5777 124.801 35.9266 124.273 36.1941C123.755 36.4501 123.179 36.578 122.544 36.578C121.791 36.578 121.127 36.4152 120.551 36.0894C119.975 35.7522 119.528 35.2695 119.211 34.6414C118.893 34.0133 118.735 33.2748 118.735 32.4256V26.738H121.733V32.0244C121.733 32.6757 121.903 33.1816 122.244 33.5423C122.585 33.9028 123.044 34.0831 123.62 34.0831C124.208 34.0831 124.672 33.9028 125.013 33.5423C125.354 33.1816 125.525 32.6757 125.525 32.0244V26.738H128.541Z"
            fill="#3A3B7B"
          />
          <path
            d="M142.736 26.6333C143.958 26.6333 144.928 26.9997 145.646 27.7325C146.374 28.4652 146.739 29.4829 146.739 30.7856V36.4733H143.741V31.187C143.741 30.5588 143.57 30.0761 143.229 29.7388C142.9 29.3899 142.442 29.2154 141.853 29.2154C141.266 29.2154 140.801 29.3899 140.46 29.7388C140.132 30.0761 139.967 30.5588 139.967 31.187V36.4733H136.968V31.187C136.968 30.5588 136.798 30.0761 136.457 29.7388C136.127 29.3899 135.669 29.2154 135.081 29.2154C134.493 29.2154 134.029 29.3899 133.688 29.7388C133.358 30.0761 133.194 30.5588 133.194 31.187V36.4733H130.178V26.738H133.194V27.9593C133.5 27.5522 133.9 27.2323 134.393 26.9997C134.887 26.7554 135.446 26.6333 136.068 26.6333C136.81 26.6333 137.468 26.7903 138.044 27.1044C138.632 27.4184 139.09 27.8662 139.42 28.4478C139.761 27.9127 140.225 27.4766 140.813 27.1393C141.401 26.802 142.042 26.6333 142.736 26.6333Z"
            fill="#3A3B7B"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_205_23"
            x1="42.405"
            y1="24.6793"
            x2="16.3169"
            y2="24.6793"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#64C2DB" />
            <stop offset="0.510417" stopColor="#7476ED" />
            <stop offset={1} stopColor="#E56F8C" />
          </linearGradient>
          <clipPath id="clip0_205_23">
            <rect
              width="132.391"
              height="24.5027"
              fill="white"
              transform="translate(14.3478 17.4098)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export const Eclips = () => {
  return (
    <>
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_200_193)" />
        <defs>
          <linearGradient
            id="paint0_linear_200_193"
            x1="72"
            y1="0"
            x2="0"
            y2="72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F76680" />
            <stop offset="1" stop-color="#57007B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const Line = () => {
  return (
    <>
      <svg
        width={69}
        height={5}
        viewBox="0 0 69 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={69} height={5} fill="url(#paint0_linear_196_145)" />
        <defs>
          <linearGradient
            id="paint0_linear_196_145"
            x1={69}
            y1={0}
            x2="68.2791"
            y2="9.94776"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F76680" />
            <stop offset={1} stopColor="#57007B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const ArrowForward = ({ color }) => {
  return (
    <>
      <svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_235_61)">
          <path
            d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_235_61">
            <rect
              width={24}
              height={24}
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export const ArrowBack = ({color}) => {
  return (
    <>
      <svg
        width={24}
        height={25}
        viewBox="0 0 23 23"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0625 10.5625H6.94375L10.3469 6.47495C10.506 6.2835 10.5826 6.03667 10.5597 5.78877C10.5369 5.54088 10.4165 5.31221 10.225 5.15308C10.0335 4.99395 9.78672 4.91739 9.53882 4.94025C9.29092 4.9631 9.06225 5.0835 8.90312 5.27495L4.21563 10.9C4.18409 10.9447 4.15589 10.9917 4.13125 11.0406C4.13125 11.0875 4.13125 11.1156 4.06563 11.1625C4.02313 11.2699 4.00088 11.3844 4 11.5C4.00088 11.6155 4.02313 11.73 4.06563 11.8375C4.06563 11.8843 4.06562 11.9125 4.13125 11.9593C4.15589 12.0082 4.18409 12.0552 4.21563 12.1L8.90312 17.725C8.99127 17.8308 9.10165 17.9159 9.22642 17.9742C9.35118 18.0326 9.48727 18.0627 9.625 18.0625C9.84405 18.0629 10.0563 17.9866 10.225 17.8468C10.3199 17.7681 10.3984 17.6715 10.4559 17.5624C10.5134 17.4533 10.5489 17.334 10.5602 17.2112C10.5715 17.0884 10.5585 16.9646 10.5219 16.8468C10.4853 16.7291 10.4258 16.6197 10.3469 16.525L6.94375 12.4375H18.0625C18.3111 12.4375 18.5496 12.3387 18.7254 12.1629C18.9012 11.9871 19 11.7486 19 11.5C19 11.2513 18.9012 11.0129 18.7254 10.837C18.5496 10.6612 18.3111 10.5625 18.0625 10.5625Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export const Smartpath = () => {
  return (
    <>
      <svg
        width="136"
        height="81"
        viewBox="0 0 136 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect x="-34" width="170" height="81" fill="url(#pattern0_227_174)" />
        <defs>
          <pattern
            id="pattern0_227_174"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_227_174"
              transform="matrix(0.00588235 0 0 0.0123457 -0.147059 0)"
            />
          </pattern>
          <image
            id="image0_227_174"
            width="220"
            height="81"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABRCAMAAACOqji1AAAHIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wOC0yMlQxMzo0NDo0MyswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDgtMjJUMTQ6MTA6NTQrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDgtMjJUMTQ6MTA6NTQrMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzFiYWEyYmEtOTg1My1jZDQyLWE4ZjEtNDVmMzU2MDBlOGI2IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDUzNzEyNTMtOGQzYS00ZDQ0LWFjMDUtNzMyNTA0MTlmNTQ0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjI4YzMzMGUtZDA4Yy0yZjQyLTlkOGUtM2EyMWVlM2QxMDYzIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjRjMjdjMjQ0LWQxZGEtNDA0NS04MWQ2LTQxZjIwMmRmZDY4ZDwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDphOTVmZDI1MC02ZGE4LTBkNGYtOTg5ZS0xNWM5NTUxZDliYmI8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDRkZTgxNzItYWQ0MC0zZDRjLWEyODUtMjJmNWEyOWQ1NjM3PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjI4YzMzMGUtZDA4Yy0yZjQyLTlkOGUtM2EyMWVlM2QxMDYzIiBzdEV2dDp3aGVuPSIyMDIwLTA4LTIyVDEzOjQ0OjQzKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozMWJhYTJiYS05ODUzLWNkNDItYThmMS00NWYzNTYwMGU4YjYiIHN0RXZ0OndoZW49IjIwMjAtMDgtMjJUMTQ6MTA6NTQrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rv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"
          />
        </defs>
      </svg>
    </>
  );
};

export const QuoteStart = () => {
  return (
    <>
      <svg
        width="15"
        height="24"
        viewBox="0 0 15 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.13332 12.0384C4.25861 13.0134 5.67791 13.5836 7.16498 13.6582C8.65204 13.7328 10.1213 13.3074 11.3385 12.4499C12.5557 11.5924 13.4508 10.352 13.8811 8.92664C14.3114 7.50124 14.2522 5.97281 13.7128 4.585C13.1735 3.19718 12.185 2.02986 10.9051 1.26912C9.62519 0.508373 8.12744 0.197994 6.65061 0.387453C5.17377 0.576913 3.80287 1.25531 2.75642 2.3145C1.70997 3.37369 1.04822 4.7527 0.876649 6.23172C0.283316 9.24839 0.289982 12.8434 1.64998 16.0651C3.08665 19.4651 5.98498 22.3317 10.9333 23.6267C11.0927 23.6701 11.259 23.6814 11.4228 23.6601C11.5865 23.6387 11.7445 23.5852 11.8874 23.5025C12.0303 23.4198 12.1555 23.3095 12.2556 23.1782C12.3557 23.0468 12.4287 22.897 12.4706 22.7372C12.5124 22.5775 12.5222 22.411 12.4993 22.2474C12.4764 22.0839 12.4214 21.9265 12.3373 21.7843C12.2533 21.6422 12.1419 21.5181 12.0096 21.4192C11.8773 21.3204 11.7268 21.2487 11.5666 21.2084C7.34831 20.1034 5.07998 17.7584 3.95331 15.0917C3.54696 14.1144 3.27125 13.0878 3.13332 12.0384Z"
          fill="url(#paint0_linear_218_253)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_218_253"
            x1="0.500818"
            y1="0.333252"
            x2="20.8527"
            y2="12.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F76680" />
            <stop offset="1" stop-color="#57007B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const QuoteEnd = () => (
  <>
    <svg
      width="15"
      height="24"
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8667 12.0384C10.7414 13.0134 9.32208 13.5836 7.83501 13.6582C6.34794 13.7328 4.87871 13.3074 3.66151 12.4499C2.44431 11.5924 1.54921 10.352 1.1189 8.92664C0.688586 7.50124 0.747827 5.97281 1.28718 4.585C1.82653 3.19718 2.81495 2.02986 4.09487 1.26912C5.37479 0.508373 6.87255 0.197994 8.34938 0.387453C9.82621 0.576913 11.1971 1.25531 12.2436 2.3145C13.29 3.37369 13.9518 4.7527 14.1233 6.23172C14.7167 9.24838 14.71 12.8434 13.35 16.0651C11.9133 19.4651 9.015 22.3317 4.06667 23.6267C3.90732 23.6701 3.74095 23.6814 3.5772 23.6601C3.41344 23.6387 3.25553 23.5852 3.11259 23.5025C2.96965 23.4198 2.84452 23.3095 2.74443 23.1782C2.64433 23.0468 2.57125 22.897 2.52941 22.7372C2.48757 22.5775 2.47781 22.411 2.50067 22.2474C2.52354 22.0839 2.57859 21.9265 2.66264 21.7843C2.74669 21.6422 2.85807 21.5181 2.99035 21.4192C3.12264 21.3204 3.2732 21.2487 3.43334 21.2084C7.65167 20.1034 9.92 17.7584 11.0467 15.0917C11.453 14.1144 11.7287 13.0878 11.8667 12.0384Z"
        fill="url(#paint0_linear_218_250)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_218_250"
          x1="14.4992"
          y1="0.333252"
          x2="-5.85271"
          y2="12.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F76680" />
          <stop offset="1" stop-color="#57007B" />
        </linearGradient>
      </defs>
    </svg>
  </>
);

export const ReadMore = () => {
  return (
    <>
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.81851 7.49983L0.249756 1.93108L1.84051 0.340332L9.00001 7.49983L1.84051 14.6593L0.249756 13.0686L5.81851 7.49983Z"
          fill="url(#paint0_linear_296_462)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_296_462"
            x1="9.00001"
            y1="0.340332"
            x2="-3.74213"
            y2="8.12697"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F76680" />
            <stop offset="1" stop-color="#57007B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const VerticalLine = () => {
  return (
    <>
      <svg
        width="3"
        height="87"
        viewBox="0 0 3 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="3" height="87" fill="url(#paint0_linear_300_484)" />
        <defs>
          <linearGradient
            id="paint0_linear_300_484"
            x1="3"
            y1="0"
            x2="-2.99287"
            y2="0.206651"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F76680" />
            <stop offset="1" stop-color="#57007B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const YellowEclips = () => {
  return (
    <>
      <svg
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32.9051"
          cy="32.9051"
          r="32.241"
          transform="rotate(35.0154 32.9051 32.9051)"
          fill="url(#paint0_linear_300_476)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_300_476"
            x1="65.1462"
            y1="0.664104"
            x2="0.664093"
            y2="65.1462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFEF5E" />
            <stop offset="1" stop-color="#F7936F" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const LittleEclips = () => {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16.325"
          cy="16.3274"
          r="15.6807"
          transform="rotate(35.0154 16.325 16.3274)"
          fill="url(#paint0_linear_1_16)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_16"
            x1="32.0057"
            y1="0.646792"
            x2="0.644361"
            y2="32.0081"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F76680" />
            <stop offset="1" stop-color="#57007B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const LittleYellow = () => {
  return (
    <>
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="22.4179"
          cy="22.4184"
          r="21.8395"
          transform="rotate(35.0154 22.4179 22.4184)"
          fill="url(#paint0_linear_300_480)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_300_480"
            x1="44.2574"
            y1="0.578922"
            x2="0.578402"
            y2="44.2579"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFEF5E" />
            <stop offset="1" stop-color="#F7936F" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export const VerticleMini = () => (
  <svg
    width="3"
    height="30"
    viewBox="0 0 3 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="1.08154"
      x2="1.08154"
      y2="30"
      stroke="url(#paint0_linear_315_655)"
      stroke-width="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_315_655"
        x1="0.081543"
        y1="30"
        x2="-1.91624"
        y2="29.9334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
    </defs>
  </svg>
);

export const LongLine = () => (
  <svg
    width="1182"
    height="3"
    viewBox="0 0 1182 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="-2.05333e-05"
      y1="2"
      x2="1182"
      y2="1.97573"
      stroke="url(#paint0_linear_315_653)"
      stroke-width="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_315_653"
        x1="1182"
        y1="2.97573"
        x2="1182"
        y2="4.97573"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F76680" />
        <stop offset="1" stop-color="#57007B" />
      </linearGradient>
    </defs>
  </svg>
);

export const PurpleLogo = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.172 7.49968L6.808 2.13568L8.222 0.72168L16 8.49968L8.222 16.2777L6.808 14.8637L12.172 9.49968H0V7.49968H12.172Z"
      fill="#57007B"
    />
  </svg>
);

export const FBL = () => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.9985 1.9925H6.094V0.0845C5.905 0.0585 5.255 0 4.498 0C2.91851 0 1.83651 0.9935 1.83651 2.8195V4.5H0.0935059V6.633H1.83651V12H3.97351V6.6335H5.646L5.9115 4.5005H3.97301V3.031C3.97351 2.4145 4.1395 1.9925 4.9985 1.9925Z"
      fill="#1A202C"
    />
  </svg>
);
