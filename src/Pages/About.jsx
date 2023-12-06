import React from 'react';
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className='first-section'>
        <div className='first-section-left'>
          <img src='image 16.png' alt='story' className='story' />
        </div>
        <div className='first-section-right'>
          <h1 className='story-title'>Our Story</h1>
          <h2 className='story-sub'>Brallium started when I became more aware of how limited the choice of undergarments was for breast cancer patients. Nipple covers were created for coverage, not protection — but I wanted to improve the inclusivity and functionality of them. Experimentation in the lab for months occurred until my material grew mature enough for its first exhibition to the public.</h2>
          <h2 className='story-sub'>The feedback I received fueled my determination to bring Brallium's products to a wider audience. Seeing this project expand from myself to a group of talented designers and developers was so rewarding. We will continue to build an embracing community for everyone!</h2>
          <img src='signature.svg' alt='signature' className='signature' />
          <div className='print-name'>
            <h2 className='name'>Bella Yu, </h2>
            <h2 className='role'> Founder of Brallium</h2>
          </div>
        </div>
      </div>
      <div className='divider'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="210" viewBox="0 0 1440 210" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-33 138C-33 136.343 -31.6569 135 -30 135C-23.3592 135 -18.2632 136.201 -13.9616 138.058C-9.75429 139.875 -6.40476 142.286 -3.3288 144.5L-3.23869 144.565C-0.0871696 146.833 2.79123 148.893 6.35801 150.433C9.87169 151.951 14.154 153 20.0176 153C25.8812 153 30.1635 151.951 33.6772 150.433C37.244 148.893 40.1224 146.833 43.2739 144.565L43.364 144.5C46.44 142.286 49.7895 139.875 53.9969 138.058C58.2984 136.201 63.3944 135 70.0352 135C76.6759 135 81.772 136.201 86.0729 138.058C90.2844 139.878 93.6348 142.292 96.7106 144.508L96.7906 144.566C99.9392 146.835 102.812 148.894 106.371 150.434C109.876 151.951 114.146 153 119.994 153C125.858 153 130.14 151.951 133.653 150.433C137.219 148.893 140.095 146.834 143.242 144.566L143.343 144.494C146.412 142.282 149.753 139.874 153.947 138.059C158.241 136.201 163.326 135 169.953 135C176.594 135 181.69 136.201 185.991 138.058C190.203 139.878 193.553 142.292 196.629 144.509L196.709 144.566C199.858 146.835 202.73 148.894 206.289 150.434C209.794 151.951 214.064 153 219.912 153C225.776 153 230.058 151.951 233.572 150.433C237.139 148.893 240.017 146.833 243.169 144.565L243.259 144.5C246.335 142.286 249.684 139.875 253.891 138.058C258.193 136.201 263.288 135 269.929 135C276.57 135 281.666 136.201 285.968 138.058C290.175 139.875 293.524 142.286 296.6 144.5L296.691 144.565C299.842 146.833 302.721 148.893 306.288 150.433C309.801 151.951 314.084 153 319.948 153C325.811 153 330.093 151.951 333.606 150.433C337.173 148.893 340.051 146.833 343.203 144.565L343.293 144.5C346.369 142.286 349.718 139.875 353.926 138.058C358.227 136.201 363.324 135 369.964 135C376.605 135 381.701 136.201 386.003 138.058C390.21 139.875 393.56 142.286 396.636 144.5L396.726 144.565C399.878 146.833 402.756 148.893 406.323 150.433C409.837 151.951 414.119 153 419.983 153C425.846 153 430.128 151.951 433.642 150.433C437.209 148.893 440.087 146.833 443.238 144.565L443.328 144.501C446.404 142.286 449.754 139.875 453.961 138.058C458.263 136.201 463.359 135 470 135C476.641 135 481.737 136.201 486.038 138.058C490.246 139.875 493.596 142.286 496.672 144.501L496.761 144.565C499.913 146.833 502.791 148.893 506.358 150.433C509.872 151.951 514.154 153 520.018 153C525.881 153 530.164 151.951 533.677 150.433C537.244 148.893 540.122 146.833 543.274 144.565L543.364 144.5C546.44 142.286 549.79 139.875 553.997 138.058C558.298 136.201 563.394 135 570.035 135C576.676 135 581.772 136.201 586.073 138.058C590.284 139.878 593.635 142.292 596.711 144.509L596.791 144.566C599.939 146.835 602.812 148.894 606.371 150.434C609.876 151.951 614.146 153 619.994 153C625.858 153 630.14 151.951 633.653 150.433C637.219 148.893 640.095 146.834 643.242 144.566L643.343 144.493C646.412 142.282 649.753 139.874 653.947 138.059C658.241 136.201 663.326 135 669.953 135C676.594 135 681.69 136.201 685.991 138.058C690.203 139.878 693.553 142.292 696.629 144.509L696.709 144.566C699.858 146.835 702.73 148.894 706.289 150.434C709.794 151.951 714.064 153 719.912 153C725.776 153 730.058 151.951 733.572 150.433C737.139 148.893 740.017 146.833 743.169 144.565L743.259 144.5C746.335 142.286 749.684 139.875 753.891 138.058C758.193 136.201 763.288 135 769.929 135C776.57 135 781.666 136.201 785.967 138.058C790.175 139.875 793.524 142.286 796.6 144.5L796.691 144.565C799.842 146.833 802.721 148.893 806.288 150.433C809.801 151.951 814.084 153 819.948 153C825.811 153 830.093 151.951 833.606 150.433C837.173 148.893 840.051 146.833 843.203 144.565L843.292 144.501C846.368 142.286 849.718 139.875 853.926 138.058C858.227 136.201 863.324 135 869.964 135C876.605 135 881.701 136.201 886.003 138.058C890.21 139.875 893.56 142.286 896.636 144.5L896.726 144.565C899.878 146.833 902.756 148.893 906.323 150.433C909.837 151.951 914.119 153 919.983 153C925.846 153 930.128 151.951 933.642 150.433C937.209 148.893 940.087 146.833 943.238 144.565L943.328 144.501C946.404 142.286 949.754 139.875 953.961 138.058C958.263 136.201 963.359 135 970 135C976.641 135 981.737 136.201 986.038 138.058C990.246 139.875 993.595 142.286 996.671 144.5L996.761 144.565C999.913 146.833 1002.79 148.893 1006.36 150.433C1009.87 151.951 1014.15 153 1020.02 153C1025.88 153 1030.16 151.951 1033.68 150.433C1037.24 148.893 1040.12 146.833 1043.27 144.565L1043.36 144.5C1046.44 142.286 1049.79 139.875 1054 138.058C1058.3 136.201 1063.39 135 1070.04 135C1076.68 135 1081.77 136.201 1086.07 138.058C1090.28 139.878 1093.64 142.292 1096.71 144.509L1096.79 144.566C1099.94 146.835 1102.81 148.894 1106.37 150.434C1109.88 151.951 1114.15 153 1119.99 153C1125.86 153 1130.14 151.951 1133.65 150.433C1137.22 148.893 1140.1 146.834 1143.24 144.566L1143.34 144.494C1146.41 142.282 1149.75 139.874 1153.95 138.059C1158.24 136.201 1163.33 135 1169.95 135C1176.59 135 1181.69 136.201 1185.99 138.058C1190.2 139.878 1193.55 142.292 1196.63 144.509L1196.71 144.566C1199.86 146.835 1202.73 148.894 1206.29 150.434C1209.79 151.951 1214.06 153 1219.91 153C1225.78 153 1230.06 151.951 1233.57 150.433C1237.14 148.893 1240.02 146.833 1243.17 144.565L1243.26 144.5C1246.33 142.286 1249.68 139.875 1253.89 138.058C1258.19 136.201 1263.29 135 1269.93 135C1276.57 135 1281.67 136.201 1285.97 138.058C1290.18 139.875 1293.52 142.286 1296.6 144.501L1296.69 144.565C1299.84 146.833 1302.72 148.893 1306.29 150.433C1309.8 151.951 1314.08 153 1319.95 153C1325.81 153 1330.09 151.951 1333.61 150.433C1337.17 148.893 1340.05 146.833 1343.2 144.565L1343.29 144.501C1346.37 142.287 1349.72 139.875 1353.93 138.058C1358.23 136.201 1363.32 135 1369.96 135C1376.61 135 1381.7 136.201 1386 138.058C1390.21 139.875 1393.56 142.286 1396.64 144.501L1396.73 144.565C1399.88 146.833 1402.76 148.893 1406.32 150.433C1409.84 151.951 1414.12 153 1419.98 153C1425.85 153 1430.13 151.951 1433.64 150.433C1437.21 148.893 1440.09 146.833 1443.24 144.565L1443.33 144.501C1446.4 142.287 1449.75 139.875 1453.96 138.058C1458.26 136.201 1463.36 135 1470 135C1471.66 135 1473 136.343 1473 138C1473 139.657 1471.66 141 1470 141C1464.14 141 1459.85 142.049 1456.34 143.567C1452.77 145.107 1449.89 147.167 1446.74 149.435L1446.65 149.5C1443.58 151.714 1440.23 154.125 1436.02 155.942C1431.72 157.799 1426.62 159 1419.98 159C1413.34 159 1408.25 157.799 1403.94 155.942C1399.74 154.125 1396.39 151.714 1393.31 149.499L1393.22 149.435C1390.07 147.167 1387.19 145.107 1383.62 143.567C1380.11 142.049 1375.83 141 1369.96 141C1364.1 141 1359.82 142.049 1356.3 143.567C1352.74 145.107 1349.86 147.167 1346.71 149.435L1346.62 149.5C1343.54 151.714 1340.19 154.125 1335.99 155.942C1331.68 157.799 1326.59 159 1319.95 159C1313.31 159 1308.21 157.799 1303.91 155.942C1299.7 154.125 1296.35 151.714 1293.28 149.499L1293.19 149.435C1290.03 147.167 1287.16 145.107 1283.59 143.567C1280.07 142.049 1275.79 141 1269.93 141C1264.07 141 1259.78 142.049 1256.27 143.567C1252.7 145.107 1249.83 147.167 1246.67 149.435L1246.58 149.499C1243.51 151.713 1240.16 154.125 1235.95 155.942C1231.65 157.799 1226.55 159 1219.91 159C1213.29 159 1208.2 157.799 1203.91 155.941C1199.71 154.126 1196.37 151.718 1193.3 149.507L1193.2 149.434C1190.05 147.166 1187.18 145.107 1183.61 143.567C1180.1 142.049 1175.82 141 1169.95 141C1164.11 141 1159.84 142.049 1156.33 143.566C1152.77 145.106 1149.9 147.165 1146.75 149.434L1146.67 149.492C1143.59 151.708 1140.24 154.123 1136.03 155.942C1131.73 157.799 1126.64 159 1119.99 159C1113.37 159 1108.28 157.799 1103.99 155.941C1099.79 154.126 1096.45 151.718 1093.38 149.507L1093.28 149.434C1090.14 147.166 1087.26 145.107 1083.69 143.567C1080.18 142.049 1075.9 141 1070.04 141C1064.17 141 1059.89 142.049 1056.38 143.567C1052.81 145.107 1049.93 147.167 1046.78 149.435L1046.69 149.5C1043.61 151.714 1040.26 154.125 1036.06 155.942C1031.75 157.799 1026.66 159 1020.02 159C1013.38 159 1008.28 157.799 1003.98 155.942C999.772 154.125 996.422 151.714 993.346 149.5L993.256 149.435C990.105 147.167 987.226 145.107 983.66 143.567C980.146 142.049 975.864 141 970 141C964.136 141 959.854 142.049 956.34 143.567C952.773 145.107 949.895 147.167 946.743 149.435L946.653 149.5C943.577 151.714 940.228 154.125 936.021 155.942C931.719 157.799 926.624 159 919.983 159C913.342 159 908.246 157.799 903.945 155.942C899.737 154.125 896.388 151.714 893.312 149.5L893.221 149.435C890.07 147.167 887.191 145.107 883.624 143.567C880.111 142.049 875.828 141 869.964 141C864.101 141 859.818 142.049 856.305 143.567C852.738 145.107 849.859 147.167 846.708 149.435L846.617 149.5C843.541 151.714 840.192 154.125 835.985 155.942C831.684 157.799 826.588 159 819.948 159C813.307 159 808.211 157.799 803.909 155.942C799.702 154.125 796.352 151.714 793.276 149.5L793.186 149.435C790.034 147.167 787.156 145.107 783.589 143.567C780.075 142.049 775.793 141 769.929 141C764.066 141 759.784 142.049 756.27 143.567C752.703 145.107 749.825 147.167 746.674 149.435L746.584 149.499C743.508 151.713 740.158 154.125 735.951 155.942C731.649 157.799 726.553 159 719.912 159C713.285 159 708.199 157.799 703.906 155.941C699.712 154.126 696.371 151.718 693.302 149.507L693.201 149.434C690.054 147.166 687.177 145.107 683.612 143.567C680.099 142.049 675.817 141 669.953 141C664.105 141 659.835 142.049 656.33 143.566C652.771 145.106 649.899 147.165 646.75 149.434L646.67 149.492C643.594 151.708 640.244 154.122 636.032 155.942C631.731 157.799 626.635 159 619.994 159C613.367 159 608.281 157.799 603.988 155.941C599.793 154.126 596.452 151.718 593.383 149.506L593.283 149.434C590.136 147.166 587.259 145.107 583.694 143.567C580.181 142.049 575.899 141 570.035 141C564.172 141 559.889 142.049 556.376 143.567C552.809 145.107 549.93 147.167 546.779 149.435L546.689 149.5C543.613 151.714 540.263 154.125 536.056 155.942C531.754 157.799 526.658 159 520.018 159C513.377 159 508.281 157.799 503.979 155.942C499.772 154.125 496.422 151.714 493.346 149.499L493.256 149.435C490.105 147.167 487.226 145.107 483.66 143.567C480.146 142.049 475.864 141 470 141C464.136 141 459.854 142.049 456.34 143.567C452.773 145.107 449.895 147.167 446.743 149.435L446.653 149.5C443.577 151.714 440.228 154.125 436.021 155.942C431.719 157.799 426.624 159 419.983 159C413.342 159 408.246 157.799 403.944 155.942C399.737 154.125 396.388 151.714 393.312 149.5L393.221 149.435C390.07 147.167 387.191 145.107 383.624 143.567C380.111 142.049 375.828 141 369.964 141C364.101 141 359.818 142.049 356.305 143.567C352.738 145.107 349.859 147.167 346.708 149.435L346.617 149.5C343.542 151.714 340.192 154.125 335.985 155.942C331.684 157.799 326.588 159 319.948 159C313.307 159 308.211 157.799 303.909 155.942C299.702 154.125 296.352 151.714 293.276 149.5L293.186 149.435C290.034 147.167 287.156 145.107 283.589 143.567C280.075 142.049 275.793 141 269.929 141C264.066 141 259.784 142.049 256.27 143.567C252.703 145.107 249.825 147.167 246.674 149.435L246.584 149.499C243.508 151.714 240.158 154.125 235.951 155.942C231.649 157.799 226.553 159 219.912 159C213.285 159 208.199 157.799 203.906 155.941C199.712 154.126 196.37 151.718 193.302 149.506L193.201 149.434C190.054 147.166 187.177 145.107 183.612 143.567C180.099 142.049 175.817 141 169.953 141C164.105 141 159.835 142.049 156.33 143.566C152.771 145.106 149.899 147.165 146.75 149.434L146.671 149.491C143.595 151.708 140.244 154.122 136.032 155.942C131.731 157.799 126.635 159 119.994 159C113.367 159 108.281 157.799 103.988 155.941C99.7933 154.126 96.4519 151.718 93.3832 149.506L93.2828 149.434C90.1356 147.166 87.2591 145.107 83.6937 143.567C80.1811 142.049 75.8989 141 70.0352 141C64.1716 141 59.8893 142.049 56.3756 143.567C52.8088 145.107 49.9304 147.167 46.7789 149.435L46.6889 149.5C43.6129 151.714 40.2633 154.125 36.056 155.942C31.7544 157.799 26.6584 159 20.0176 159C13.3768 159 8.28082 157.799 3.97925 155.942C-0.228111 154.125 -3.57764 151.714 -6.6536 149.5L-6.74371 149.435C-9.89523 147.167 -12.7736 145.107 -16.3404 143.567C-19.8541 142.049 -24.1364 141 -30 141C-31.6569 141 -33 139.657 -33 138Z" fill="#81B0B2" />
          <path d="M1396.63 99.634C1353.71 111.737 1328.73 156.344 1340.83 199.268C1383.75 187.165 1408.74 142.558 1396.63 99.634Z" fill="#00738C" />
          <path d="M1396.63 99.634C1439.56 87.5313 1484.17 112.517 1496.27 155.44C1453.34 167.543 1408.74 142.558 1396.63 99.634Z" fill="#00738C" />
          <path d="M1396.63 99.634C1353.71 111.737 1309.1 86.7514 1297 43.8278C1339.92 31.7251 1384.53 56.7104 1396.63 99.634Z" fill="#00738C" />
          <path d="M1396.63 99.634C1439.56 87.5313 1464.54 42.9236 1452.44 0C1409.52 12.1027 1384.53 56.7104 1396.63 99.634Z" fill="#00738C" />
          <path d="M1224.61 151.614C1197.17 147.237 1171.38 165.935 1167 193.377C1194.44 197.755 1220.24 179.057 1224.61 151.614Z" fill="#97A675" />
          <path d="M1224.61 151.614C1252.06 155.992 1270.75 181.786 1266.38 209.229C1238.94 204.852 1220.24 179.057 1224.61 151.614Z" fill="#97A675" />
          <path d="M1224.61 151.614C1197.17 147.237 1178.47 121.442 1182.85 94C1210.29 98.3772 1228.99 124.172 1224.61 151.614Z" fill="#97A675" />
          <path d="M1224.61 151.614C1252.06 155.992 1277.85 137.294 1282.23 109.851C1254.79 105.474 1228.99 124.172 1224.61 151.614Z" fill="#97A675" />
        </svg>
      </div>
      <div className='second-section'>
        <div className='second-section-inner'>
          <div className='statement-container-left'>
            <div className='statement-title'>
              Brallium’s
            </div>
            <div className='statement-title'>
              Mission Statement:
            </div>
          </div>
          <div className='statement-container-right'>
            <h2 className='substatement-title'>We are not here to cover up; we are here to protect.</h2>
            <h2 className='substatement-text'>At Brallium, we aim to create sustainable, reusable, and multi-functional nipple covers wearable by anyone and everyone. Our nipple covers are made out of biodegradable and bacteria resistant material, protecting not just your skin, but the environment.</h2>
            <h2 className='substatement-text'>We make it easier for you to dispose of your nipple covers while simultaneously minimizing the cost of disposal for nature.</h2>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="25" viewBox="0 0 1440 25" fill="none">
        <path d="M-30 3.49963C-4.9912 3.49963 -4.9912 21.4996 20.0176 21.4996C45.0264 21.4996 45.0264 3.49963 70.0352 3.49963C95.044 3.49963 95.044 21.4996 119.994 21.4996C145.004 21.4996 145.004 3.49963 169.953 3.49963C194.963 3.49963 194.963 21.4996 219.912 21.4996C244.921 21.4996 244.921 3.49963 269.929 3.49963C294.938 3.49963 294.938 21.4996 319.948 21.4996C344.955 21.4996 344.955 3.49963 369.964 3.49963C394.974 3.49963 394.974 21.4996 419.983 21.4996C444.991 21.4996 444.991 3.49963 470 3.49963C495.009 3.49963 495.009 21.4996 520.018 21.4996C545.026 21.4996 545.026 3.49963 570.035 3.49963C595.044 3.49963 595.044 21.4996 619.994 21.4996C645.004 21.4996 645.004 3.49963 669.953 3.49963C694.963 3.49963 694.963 21.4996 719.912 21.4996C744.921 21.4996 744.921 3.49963 769.929 3.49963C794.938 3.49963 794.938 21.4996 819.948 21.4996C844.955 21.4996 844.955 3.49963 869.964 3.49963C894.974 3.49963 894.974 21.4996 919.983 21.4996C944.991 21.4996 944.991 3.49963 970 3.49963C995.009 3.49963 995.009 21.4996 1020.02 21.4996C1045.03 21.4996 1045.03 3.49963 1070.04 3.49963C1095.04 3.49963 1095.04 21.4996 1119.99 21.4996C1145 21.4996 1145 3.49963 1169.95 3.49963C1194.96 3.49963 1194.96 21.4996 1219.91 21.4996C1244.92 21.4996 1244.92 3.49963 1269.93 3.49963C1294.94 3.49963 1294.94 21.4996 1319.95 21.4996C1344.96 21.4996 1344.95 3.49963 1369.96 3.49963C1394.97 3.49963 1394.97 21.4996 1419.98 21.4996C1444.99 21.4996 1444.99 3.49963 1470 3.49963" stroke="#81B0B2" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" />
      </svg>
      <div className='third-section'>
        <div className='third-section-container'>
          <h1 className='value-title'>Our Values</h1>
        </div>
      </div>
    </>
  )
}

export default About


