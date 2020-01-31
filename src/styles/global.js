import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
  }

  html, body, #root{
  }

  body {
  }

  body, input, button {

  }

  button {
  }

  /* @font-face {
  font-family: 'icomoon';
  src: url("../fonts/icomoon/icomoon.eot?srf3rx");
  src: url("../fonts/icomoon/icomoon.eot?srf3rx#iefix") format("embedded-opentype"), url("../fonts/icomoon/icomoon.ttf?srf3rx") format("truetype"), url("../fonts/icomoon/icomoon.woff?srf3rx") format("woff"), url("../fonts/icomoon/icomoon.svg?srf3rx#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}*/

/* =======================================================
*
* 	Template Style
*
* ======================================================= */
body {
  font-family: "Lato", Arial, sans-serif;
  font-weight: 400;
  /* font-size: 16px;*/
  /* line-height: 1.7; */
  color: #777;
  background: #fff;
}

#page {
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.offcanvas #page {
  overflow: hidden;
  position: absolute;
}
.offcanvas #page:after {
  -webkit-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.7);
  content: "";
}

a {
  color: #FBB448;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
a:hover, a:active, a:focus {
  color: #FBB448;
  outline: none;
  text-decoration: none;
}

p {
  margin-bottom: 20px;
}

h1, h2, h3, h4, h5, h6, figure {
  color: #000;
  font-family: "Lato", Arial, sans-serif;
  font-weight: 400;
  margin: 0 0 20px 0;
}

::-webkit-selection {
  color: #fff;
  background: #FBB448;
}

::-moz-selection {
  color: #fff;
  background: #FBB448;
}

::selection {
  color: #fff;
  background: #FBB448;
}

.gtco-container {
  max-width: 1100px;
  position: relative;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

/* .gtco-nav {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1001;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
@media screen and (max-width: 768px) {
  .gtco-nav {
    padding: 20px 0;
  }
}
.gtco-nav #gtco-logo {
  font-size: 20px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: bold;
}
.gtco-nav #gtco-logo em {
  color: #FBB448;
}
.gtco-nav a {
  padding: 5px 10px;
  color: #fff;
}
@media screen and (max-width: 768px) {
  .gtco-nav .menu-1, .gtco-nav .menu-2 {
    display: none;
  }
}
.gtco-nav ul {
  padding: 0;
  margin: 2px 0 0 0;
}
.gtco-nav ul li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline;
}
.gtco-nav ul li a {
  font-size: 16px;
  padding: 30px 10px;
  color: rgba(255, 255, 255, 0.7);
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.gtco-nav ul li a:hover, .gtco-nav ul li a:focus, .gtco-nav ul li a:active {
  color: white;
}
.gtco-nav ul li.has-dropdown {
  position: relative;
}
.gtco-nav ul li.has-dropdown .dropdown {
  width: 190px;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 40px;
  left: 0;
  text-align: left;
  background: #fff;
  padding: 20px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: 0s;
  -o-transition: 0s;
  transition: 0s;
}
.gtco-nav ul li.has-dropdown .dropdown:before {
  bottom: 100%;
  left: 40px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 8px;
  margin-left: -8px;
}
.gtco-nav ul li.has-dropdown .dropdown li {
  display: block;
  margin-bottom: 7px;
}
.gtco-nav ul li.has-dropdown .dropdown li:last-child {
  margin-bottom: 0;
}
.gtco-nav ul li.has-dropdown .dropdown li a {
  padding: 2px 0;
  display: block;
  color: #999999;
  line-height: 1.2;
  text-transform: none;
  font-size: 15px;
}
.gtco-nav ul li.has-dropdown .dropdown li a:hover {
  color: #FBB448;
}
.gtco-nav ul li.has-dropdown .dropdown li.active > a {
  color: #000 !important;
}
.gtco-nav ul li.has-dropdown:hover a, .gtco-nav ul li.has-dropdown:focus a {
  color: #fff;
}
.gtco-nav ul li.btn-cta a {
  color: #FBB448;
}
.gtco-nav ul li.btn-cta a span {
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 4px 20px;
  color: #fff;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
.gtco-nav ul li.btn-cta a:hover span {
  background: #fff;
  color: #FBB448;
}
.gtco-nav ul li.active > a {
  color: #FBB448 !important;
} */

/* #gtco-header {
  background: #4d4d4d;
}
@media screen and (max-width: 992px) {
  #gtco-header.gtco-cover {
    height: inherit !important;
    padding: 3em 0 !important;
  }
}
@media screen and (max-width: 480px) {
  #gtco-header .text-left {
    text-align: center !important;
  }
}
@media screen and (max-width: 480px) {
  #gtco-header .btn {
    display: block;
    width: 100%;
  }
}
#gtco-header .mt-text {
  margin-top: 7em;
  margin-bottom: 3em;
}
@media screen and (max-width: 768px) {
  #gtco-header .mt-text {
    margin-top: 0;
  }
}
#gtco-header .intro-text-small {
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: .15em;
  display: block;
  margin-bottom: 10px;
}
#gtco-header h1, #gtco-header h2 {
  margin: 0;
  padding: 0;
  color: white;
}
#gtco-header h1 {
  margin-bottom: 0px;
  font-size: 64px;
  line-height: 1.5;
  font-weight: 300;
  font-family: "Kaushan Script", cursive !important;
}
@media screen and (max-width: 768px) {
  #gtco-header h1 {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 10px;
  }
}
#gtco-header h2 {
  font-weight: 300;
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 30px;
}
#gtco-header .form-wrap {
  border-top: 10px solid #FBB448;
  position: relative;
  width: 100%;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
}
#gtco-header .form-wrap h3 {
  font-family: "Kaushan Script", cursive;
}
#gtco-header .form-wrap .tab-menu {
  padding: 0 !important;
  margin: 0 0 -10px 0 !important;
  width: 100%;
  float: left;
  z-index: 12;
  position: relative;
}
#gtco-header .form-wrap .tab-menu li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline;
  float: left;
  width: 50%;
  text-align: center;
}
#gtco-header .form-wrap .tab-menu li a {
  padding: 10px 20px 20px 20px;
  float: left;
  width: 100%;
  display: block;
  background: rgba(255, 255, 255, 0.5);
  color: #1a1a1a;
}
#gtco-header .form-wrap .tab-menu li a:hover {
  color: #1a1a1a;
}
#gtco-header .form-wrap .tab-menu li.active a {
  display: block;
  padding: 10px 20px 20px 20px;
  background: #fff;
  color: #FBB448;
}
#gtco-header .form-wrap .tab-menu li.gtco-first a {
  border-top-left-radius: 7px;
}
#gtco-header .form-wrap .tab-menu li.gtco-second a {
  border-top-right-radius: 7px;
}
#gtco-header .form-wrap .tab-content {
  z-index: 10;
  position: relative;
  clear: both;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
}
#gtco-header .form-wrap .tab-content h3 {
  color: #fff;
}
#gtco-header .form-wrap .tab-content label {
  color: rgba(255, 255, 255, 0.8);
}
#gtco-header .form-wrap .tab-content .tab-content-inner {
  display: none;
}
#gtco-header .form-wrap .tab-content .tab-content-inner.active {
  display: block;
}
#gtco-header .form-wrap .tab-content .form-control {
  color: #fff !important;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
#gtco-header .form-wrap .tab-content .form-control option {
  color: #000;
}

#gtco-header,
#gtco-counter,
.gtco-bg {
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
} */

.gtco-bg {
  background-position: center center;
  width: 100%;
  float: left;
  position: relative;
}

.gtco-video {
  height: 450px;
  overflow: hidden;
  margin-bottom: 30px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  border-radius: 7px;
}
.gtco-video.gtco-video-sm {
  height: 250px;
}
.gtco-video a {
  z-index: 1001;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -45px;
  margin-left: -45px;
  width: 90px;
  height: 90px;
  display: table;
  text-align: center;
  background: #fff;
  -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
.gtco-video a i {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-size: 40px;
}
.gtco-video .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.gtco-video:hover .overlay {
  background: rgba(0, 0, 0, 0.7);
}
.gtco-video:hover a {
  position: relative;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}

/* .gtco-cover {
  height: 900px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  float: left;
  width: 100%;
}
.gtco-cover a {
  color: #FBB448;
}
.gtco-cover a:hover {
  color: white;
}
.gtco-cover .overlay {
  z-index: 1;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.gtco-cover > .gtco-container {
  position: relative;
  z-index: 10;
}
@media screen and (max-width: 768px) {
  .gtco-cover {
    height: 600px;
  }
}
.gtco-cover .display-t,
.gtco-cover .display-tc {
  height: 900px;
  display: table;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .gtco-cover .display-t,
  .gtco-cover .display-tc {
    height: 600px;
  }
}
.gtco-cover.gtco-cover-sm {
  height: 600px;
}
@media screen and (max-width: 768px) {
  .gtco-cover.gtco-cover-sm {
    height: 400px;
  }
}
.gtco-cover.gtco-cover-sm .display-t,
.gtco-cover.gtco-cover-sm .display-tc {
  height: 600px;
  display: table;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .gtco-cover.gtco-cover-sm .display-t,
  .gtco-cover.gtco-cover-sm .display-tc {
    height: 400px;
  }
}
.gtco-cover.gtco-cover-xs {
  height: 500px;
}
@media screen and (max-width: 768px) {
  .gtco-cover.gtco-cover-xs {
    height: inherit !important;
    padding: 3em 0;
  }
}
.gtco-cover.gtco-cover-xs .display-t,
.gtco-cover.gtco-cover-xs .display-tc {
  height: 500px;
  display: table;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .gtco-cover.gtco-cover-xs .display-t,
  .gtco-cover.gtco-cover-xs .display-tc {
    padding: 3em 0;
    height: inherit !important;
  }
}
.gtco-cover p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px !important;
  font-weight: 300;
} */

.gtco-staff {
  text-align: center;
  margin-bottom: 7em;
  float: left;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .gtco-staff {
    margin-bottom: 3em;
  }
}
.gtco-staff img {
  width: 100px;
  margin-bottom: 20px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
.gtco-staff h3 {
  font-size: 24px;
  margin-bottom: 5px;
}
.gtco-staff p {
  margin-bottom: 30px;
}
.gtco-staff .role {
  color: #bfbfbf;
  margin-bottom: 30px;
  font-weight: normal;
  display: block;
}

.gtco-social-icons {
  margin: 0;
  padding: 0;
}
.gtco-social-icons li {
  margin: 0;
  padding: 0;
  list-style: none;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
}
.gtco-social-icons li a {
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
  color: #FBB448;
  padding-left: 10px;
  padding-right: 10px;
}
.gtco-social-icons li a i {
  font-size: 20px;
}

.gtco-contact-info {
  margin-bottom: 30px;
  float: left;
  width: 100%;
  position: relative;
}
.gtco-contact-info ul {
  padding: 0;
  margin: 0;
}
.gtco-contact-info ul li {
  padding: 0 0 0 50px;
  margin: 0 0 30px 0;
  list-style: none;
  position: relative;
}
.gtco-contact-info ul li:before {
  color: #cccccc;
  position: absolute;
  left: 0;
  top: .05em;
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.gtco-contact-info ul li.address:before {
  font-size: 30px;
  content: "\e9d1";
}
.gtco-contact-info ul li.phone:before {
  font-size: 23px;
  content: "\e9f4";
}
.gtco-contact-info ul li.email:before {
  font-size: 23px;
  content: "\e9da";
}
.gtco-contact-info ul li.url:before {
  font-size: 23px;
  content: "\e9af";
}

form label {
  font-weight: normal !important;
}

.cursive-font {
  font-family: "Kaushan Script", cursive;
}

.primary-color {
  color: #FBB448 !important;
}

#gtco-header .display-tc,
#gtco-counter .display-tc,
.gtco-cover .display-tc {
  display: table-cell !important;
  vertical-align: middle;
}
#gtco-header .display-tc .intro-text-small,
#gtco-counter .display-tc .intro-text-small,
.gtco-cover .display-tc .intro-text-small {
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: .15em;
  display: block;
  margin-bottom: 10px;
}
#gtco-header .display-tc h1, #gtco-header .display-tc h2,
#gtco-counter .display-tc h1,
#gtco-counter .display-tc h2,
.gtco-cover .display-tc h1,
.gtco-cover .display-tc h2 {
  margin: 0;
  padding: 0;
  color: white;
}
#gtco-header .display-tc h1,
#gtco-counter .display-tc h1,
.gtco-cover .display-tc h1 {
  margin-bottom: 30px;
  font-size: 59px;
  line-height: 1.2;
  font-weight: 300;
}
@media screen and (max-width: 768px) {
  #gtco-header .display-tc h1,
  #gtco-counter .display-tc h1,
  .gtco-cover .display-tc h1 {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 10px;
  }
}
#gtco-header .display-tc h2,
#gtco-counter .display-tc h2,
.gtco-cover .display-tc h2 {
  font-weight: 300;
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 30px;
}

#gtco-counter {
  text-align: center;
}
#gtco-counter .counter {
  font-size: 50px;
  margin-bottom: 10px;
  color: #FBB448;
  font-weight: 100;
  display: block;
}
#gtco-counter .counter-label {
  margin-bottom: 0;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: .1em;
}
@media screen and (max-width: 768px) {
  #gtco-counter .feature-center {
    margin-bottom: 50px;
  }
}
#gtco-counter .icon {
  width: 70px;
  height: 70px;
  text-align: center;
  margin-bottom: 20px;
  background: none !important;
  border: none !important;
}
#gtco-counter .icon i {
  height: 70px;
}
#gtco-counter .icon i:before {
  color: #cccccc;
  display: block;
  text-align: center;
  margin-left: 3px;
}

#gtco-features,
#gtco-features-2,
#gtco-products,
#gtco-services,
#gtco-subscribe,
#gtco-footer,
.gtco-section {
  padding: 7em 0;
  clear: both;
  position: relative;
}
@media screen and (max-width: 768px) {
  #gtco-features,
  #gtco-features-2,
  #gtco-products,
  #gtco-services,
  #gtco-subscribe,
  #gtco-footer,
  .gtco-section {
    padding: 2em 0;
  }
}
#gtco-features.border-bottom,
#gtco-features-2.border-bottom,
#gtco-products.border-bottom,
#gtco-services.border-bottom,
#gtco-subscribe.border-bottom,
#gtco-footer.border-bottom,
.gtco-section.border-bottom {
  border-bottom: 1px solid #e6e6e6;
}

#gtco-features {
  background: #FBB448;
}
#gtco-features .gtco-heading h2 {
  color: #fff;
}
#gtco-features .gtco-heading p {
  color: rgba(255, 255, 255, 0.7);
}
#gtco-features .feature-center {
  color: #fff;
}
#gtco-features .feature-center .icon {
  width: 90px;
  height: 90px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: #FBB448;
}
#gtco-features .feature-center .icon i {
  color: #fff;
  font-size: 40px;
  font-style: normal;
}
#gtco-features .feature-center h3 {
  font-weight: 400;
  color: #fff;
}
#gtco-features .feature-center p {
  color: rgba(255, 255, 255, 0.7);
}

#gtco-features-2 {
  background: #efefef;
  position: relative;
  float: left;
  width: 100%;
}

.feature-center {
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  float: left;
  width: 100%;
  margin-bottom: 40px;
}
@media screen and (max-width: 768px) {
  .feature-center {
    margin-bottom: 50px;
  }
}
.feature-center .icon {
  width: 90px;
  height: 90px;
  display: table;
  text-align: center;
  margin: 0 auto 40px auto;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
.feature-center .icon i {
  display: table-cell;
  vertical-align: middle;
  height: 90px;
  font-size: 40px;
  line-height: 40px;
  color: #cccccc;
}
.feature-center p, .feature-center h3 {
  margin-bottom: 30px;
}
.feature-center h3 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #FBB448;
  position: relative;
}

.feature-left {
  float: left;
  width: 100%;
  margin-bottom: 30px;
  position: relative;
}
.feature-left .icon {
  float: left;
  text-align: center;
  width: 15%;
}
.feature-left .icon i {
  display: table-cell;
  vertical-align: middle;
  font-size: 40px;
  color: #FBB448;
}
.feature-left .feature-copy {
  float: right;
  width: 80%;
}
.feature-left .feature-copy h3 {
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.gtco-heading {
  margin-bottom: 5em;
}
.gtco-heading.gtco-heading-sm {
  margin-bottom: 2em;
}
.gtco-heading h2 {
  font-size: 50px;
  margin-bottom: 10px;
  line-height: 1.5;
  font-weight: 300;
  color: #000;
  position: relative;
}
@media screen and (max-width: 768px) {
  .gtco-heading h2 {
    font-size: 26px;
  }
}
.gtco-heading p {
  font-size: 20px;
  line-height: 1.5;
  color: gray;
}

#gtco-products {
  background: #008ee0;
}
#gtco-products .item img {
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  border-radius: 7px;
}
#gtco-products .gtco-heading h2 {
  color: #fff;
}
#gtco-products .gtco-heading p {
  color: rgba(255, 255, 255, 0.8);
}

#gtco-subscribe {
  background: #0098EF;
}
#gtco-subscribe .form-control {
  background: transparent;
  color: #fff;
  font-size: 16px !important;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.2) !important;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
#gtco-subscribe .form-control:focus {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.8) !important;
}
#gtco-subscribe .form-control::-webkit-input-placeholder {
  color: #fff;
}
#gtco-subscribe .form-control:-moz-placeholder {
  /* Firefox 18- */
  color: #fff;
}
#gtco-subscribe .form-control::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}
#gtco-subscribe .form-control:-ms-input-placeholder {
  color: #fff;
}
#gtco-subscribe .btn {
  height: 46px;
  border: none !important;
  background: #FBB448;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  padding-left: 50px;
  padding-right: 50px;
}
#gtco-subscribe .form-inline .form-group {
  width: 100% !important;
  margin-bottom: 10px;
}
#gtco-subscribe .form-inline .form-group .form-control {
  width: 100%;
}
#gtco-subscribe .gtco-heading {
  margin-bottom: 30px;
}
#gtco-subscribe .gtco-heading h2 {
  color: #fff;
}
#gtco-subscribe .gtco-heading p {
  color: rgba(255, 255, 255, 0.5);
}

#gtco-footer {
  background-color: #333333;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
#gtco-footer .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
#gtco-footer .gtco-footer-links {
  padding: 0;
  margin: 0 0 20px 0;
  float: left;
  width: 100%;
}
#gtco-footer .gtco-footer-links li {
  padding: 0;
  margin: 0 0 15px 0;
  list-style: none;
  line-height: 1;
}
#gtco-footer .gtco-footer-links li a {
  text-decoration: none;
}
#gtco-footer .gtco-footer-links li a:hover {
  text-decoration: underline;
}
#gtco-footer .gtco-widget {
  margin-bottom: 30px;
}
#gtco-footer .gtco-widget h3 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
}
#gtco-footer .gtco-widget .gtco-quick-contact {
  padding: 0;
  margin: 0;
}
#gtco-footer .gtco-widget .gtco-quick-contact li {
  padding: 0;
  margin: 0 20px 10px 0px;
  list-style: none;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
}
#gtco-footer .gtco-widget .gtco-quick-contact li i {
  width: 30px;
  float: left;
  font-size: 18px;
  position: relative;
  margin-top: 4px;
  display: -moz-inline-stack;
  display: inline-block;
  zoom: 1;
  *display: inline;
}
#gtco-footer .footer-logo span {
  color: #FBB448;
}
#gtco-footer .copyright {
  color: #666666;
  padding-top: 3em;
  margin-top: 3em;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
@media screen and (max-width: 768px) {
  #gtco-footer .copyright .pull-left,
  #gtco-footer .copyright .pull-right {
    float: none !important;
    text-align: center;
  }
}
#gtco-footer .copyright .block {
  display: block;
}

#gtco-offcanvas {
  position: absolute;
  z-index: 1901;
  width: 270px;
  background: black;
  top: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 45px 40px 40px 40px;
  overflow-y: auto;
  display: none;
  -moz-transform: translateX(270px);
  -webkit-transform: translateX(270px);
  -ms-transform: translateX(270px);
  -o-transform: translateX(270px);
  transform: translateX(270px);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
@media screen and (max-width: 768px) {
  #gtco-offcanvas {
    display: block;
  }
}
.offcanvas #gtco-offcanvas {
  -moz-transform: translateX(0px);
  -webkit-transform: translateX(0px);
  -ms-transform: translateX(0px);
  -o-transform: translateX(0px);
  transform: translateX(0px);
}
#gtco-offcanvas a {
  color: rgba(255, 255, 255, 0.5);
}
#gtco-offcanvas a:hover {
  color: rgba(255, 255, 255, 0.8);
}
#gtco-offcanvas ul {
  padding: 0;
  margin: 0;
}
#gtco-offcanvas ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}
#gtco-offcanvas ul li > ul {
  padding-left: 20px;
  display: none;
}
#gtco-offcanvas ul li.offcanvas-has-dropdown > a {
  display: block;
  position: relative;
}
#gtco-offcanvas ul li.offcanvas-has-dropdown > a:after {
  position: absolute;
  right: 0px;
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e921";
  font-size: 20px;
  color: rgba(255, 255, 255, 0.2);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
#gtco-offcanvas ul li.offcanvas-has-dropdown.active a:after {
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.uppercase {
  font-size: 14px;
  color: #000;
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
}

/* .gototop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.gototop.active {
  opacity: 1;
  visibility: visible;
}
.gototop a {
  width: 50px;
  height: 50px;
  display: table;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
.gototop a i {
  height: 50px;
  display: table-cell;
  vertical-align: middle;
}
.gototop a:hover, .gototop a:active, .gototop a:focus {
  text-decoration: none;
  outline: none;
} */

.gtco-nav-toggle {
  width: 25px;
  height: 25px;
  cursor: pointer;
  text-decoration: none;
}
.gtco-nav-toggle.active i::before, .gtco-nav-toggle.active i::after {
  background: #444;
}
.gtco-nav-toggle:hover, .gtco-nav-toggle:focus, .gtco-nav-toggle:active {
  outline: none;
  border-bottom: none !important;
}
.gtco-nav-toggle i {
  position: relative;
  display: inline-block;
  width: 25px;
  height: 2px;
  color: #252525;
  font: bold 14px/.4 Helvetica;
  text-transform: uppercase;
  text-indent: -55px;
  background: #252525;
  transition: all .2s ease-out;
}
.gtco-nav-toggle i::before, .gtco-nav-toggle i::after {
  content: '';
  width: 25px;
  height: 2px;
  background: #252525;
  position: absolute;
  left: 0;
  transition: all .2s ease-out;
}
.gtco-nav-toggle.gtco-nav-white > i {
  color: #fff;
  background: #fff;
}
.gtco-nav-toggle.gtco-nav-white > i::before, .gtco-nav-toggle.gtco-nav-white > i::after {
  background: #fff;
}

.gtco-nav-toggle i::before {
  top: -7px;
}

.gtco-nav-toggle i::after {
  bottom: -7px;
}

.gtco-nav-toggle:hover i::before {
  top: -10px;
}

.gtco-nav-toggle:hover i::after {
  bottom: -10px;
}

.gtco-nav-toggle.active i {
  background: transparent;
}

.gtco-nav-toggle.active i::before {
  top: 0;
  -webkit-transform: rotateZ(45deg);
  -moz-transform: rotateZ(45deg);
  -ms-transform: rotateZ(45deg);
  -o-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.gtco-nav-toggle.active i::after {
  bottom: 0;
  -webkit-transform: rotateZ(-45deg);
  -moz-transform: rotateZ(-45deg);
  -ms-transform: rotateZ(-45deg);
  -o-transform: rotateZ(-45deg);
  transform: rotateZ(-45deg);
}

.gtco-nav-toggle {
  position: absolute;
  right: 0px;
  top: 10px;
  z-index: 21;
  padding: 6px 0 0 0;
  display: block;
  margin: 0 auto;
  display: none;
  height: 44px;
  width: 44px;
  z-index: 2001;
  border-bottom: none !important;
}
@media screen and (max-width: 768px) {
  .gtco-nav-toggle {
    display: block;
  }
}

.btn {
  margin-right: 4px;
  margin-bottom: 4px;
  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  padding: 8px 30px;
}
.btn.btn-md {
  padding: 8px 20px !important;
}
.btn.btn-lg {
  padding: 18px 36px !important;
}
.btn:hover, .btn:active, .btn:focus {
  box-shadow: none !important;
  outline: none !important;
}

.btn-primary {
  background: #FBB448;
  color: #fff;
  border: 2px solid #FBB448 !important;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  background: #fcbe61 !important;
  border-color: #fcbe61 !important;
}
.btn-primary.btn-outline {
  background: transparent;
  color: #FBB448;
  border: 2px solid #FBB448;
}
.btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {
  background: #FBB448;
  color: #fff;
}

.btn-success {
  background: #5cb85c;
  color: #fff;
  border: 2px solid #5cb85c;
}
.btn-success:hover, .btn-success:focus, .btn-success:active {
  background: #4cae4c !important;
  border-color: #4cae4c !important;
}
.btn-success.btn-outline {
  background: transparent;
  color: #5cb85c;
  border: 2px solid #5cb85c;
}
.btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {
  background: #5cb85c;
  color: #fff;
}

.btn-info {
  background: #5bc0de;
  color: #fff;
  border: 2px solid #5bc0de;
}
.btn-info:hover, .btn-info:focus, .btn-info:active {
  background: #46b8da !important;
  border-color: #46b8da !important;
}
.btn-info.btn-outline {
  background: transparent;
  color: #5bc0de;
  border: 2px solid #5bc0de;
}
.btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {
  background: #5bc0de;
  color: #fff;
}

.btn-warning {
  background: #f0ad4e;
  color: #fff;
  border: 2px solid #f0ad4e;
}
.btn-warning:hover, .btn-warning:focus, .btn-warning:active {
  background: #eea236 !important;
  border-color: #eea236 !important;
}
.btn-warning.btn-outline {
  background: transparent;
  color: #f0ad4e;
  border: 2px solid #f0ad4e;
}
.btn-warning.btn-outline:hover, .btn-warning.btn-outline:focus, .btn-warning.btn-outline:active {
  background: #f0ad4e;
  color: #fff;
}

.btn-danger {
  background: #d9534f;
  color: #fff;
  border: 2px solid #d9534f;
}
.btn-danger:hover, .btn-danger:focus, .btn-danger:active {
  background: #d43f3a !important;
  border-color: #d43f3a !important;
}
.btn-danger.btn-outline {
  background: transparent;
  color: #d9534f;
  border: 2px solid #d9534f;
}
.btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {
  background: #d9534f;
  color: #fff;
}

.btn-white {
  background: #fff;
  color: #000;
  border: 2px solid #fff;
}
.btn-white:hover, .btn-white:focus, .btn-white:active {
  color: #000;
  background: #f2f2f2 !important;
  border-color: #f2f2f2 !important;
}
.btn-white.btn-outline {
  color: #fff;
  border: 2px solid #fff;
}
.btn-white.btn-outline:hover, .btn-white.btn-outline:focus, .btn-white.btn-outline:active {
  background: #fff;
  color: #000;
  border: 2px solid #fff;
}

.btn-outline {
  background: none;
  border: 2px solid gray;
  font-size: 16px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.btn-outline:hover, .btn-outline:focus, .btn-outline:active {
  box-shadow: none;
}

.btn.with-arrow {
  position: relative;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.btn.with-arrow i {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 50%;
  margin-top: -8px;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}
.btn.with-arrow:hover {
  padding-right: 50px;
}
.btn.with-arrow:hover i {
  color: #fff;
  right: 18px;
  visibility: visible;
  opacity: 1;
}

.form-control {
  box-shadow: none;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  height: 46px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 15px;
  padding-right: 15px;
}
.form-control:active, .form-control:focus {
  outline: none;
  box-shadow: none;
  border-color: #FBB448;
}

.row-mt-15em {
  margin-top: 15em;
}
@media screen and (max-width: 768px) {
  .row-mt-15em {
    margin-top: 7em;
  }
}

.mt-sm {
  margin-top: 6em;
}
@media screen and (max-width: 768px) {
  .mt-sm {
    margin-top: 3em;
  }
}

.row-pb-md {
  padding-bottom: 4em !important;
}

.row-pb-sm {
  padding-bottom: 2em !important;
}

/* .gtco-loader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url('../../images/loader.gif') center no-repeat #fff;
} */

.js .animate-box {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .gtco-nav .gtco-contact {
    text-align: left !important;
  }
}
.gtco-nav .gtco-contact ul {
  padding: 0;
  margin: 0 0 20px 0;
}
.gtco-nav .gtco-contact ul li {
  padding: 0;
  margin: 0;
}
.gtco-nav .gtco-contact ul li a {
  font-size: 14px;
  font-weight: bold !important;
  margin-left: 0px;
}
.gtco-nav .gtco-contact ul li a i {
  color: #FBB448;
}
.gtco-nav .gtco-contact ul li a:hover i {
  color: #fff;
}

.gtco-flex {
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  position: relative;
  float: left;
}

/* Owl Override Style */
.owl-carousel .owl-controls,
.owl-carousel-posts .owl-controls {
  margin-top: 0;
}

.owl-carousel .owl-controls .owl-nav .owl-next,
.owl-carousel .owl-controls .owl-nav .owl-prev,
.owl-carousel-posts .owl-controls .owl-nav .owl-next,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev {
  top: 50%;
  margin-top: -39px;
  z-index: 9999;
  position: absolute;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}

.owl-carousel-posts .owl-controls .owl-nav .owl-next,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev {
  top: 24%;
}

.owl-carousel .owl-controls .owl-nav .owl-next,
.owl-carousel-posts .owl-controls .owl-nav .owl-next {
  right: 20px;
}
.owl-carousel .owl-controls .owl-nav .owl-next:hover,
.owl-carousel-posts .owl-controls .owl-nav .owl-next:hover {
  margin-right: -10px;
}

.owl-carousel .owl-controls .owl-nav .owl-prev,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev {
  left: 20px;
}
.owl-carousel .owl-controls .owl-nav .owl-prev:hover,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev:hover {
  margin-left: -10px;
}

.owl-carousel-posts .owl-controls .owl-nav .owl-next i,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-next i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-prev i {
  color: #444;
}
.owl-carousel-posts .owl-controls .owl-nav .owl-next:hover i,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev:hover i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-next:hover i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-prev:hover i {
  color: #000;
}

.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-next i,
.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-prev i {
  color: #fff;
}
.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-next:hover i,
.owl-carousel-fullwidth.fh5co-light-arrow .owl-controls .owl-nav .owl-prev:hover i {
  color: #fff;
}

@media screen and (max-width: 768px) {
  .owl-theme .owl-controls .owl-nav {
    display: none;
  }
}

.owl-theme .owl-controls .owl-nav [class*="owl-"] {
  background: none !important;
}
.owl-theme .owl-controls .owl-nav [class*="owl-"] i {
  font-size: 24px;
  background: #f54c53 !important;
  padding: 12px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.owl-theme .owl-controls .owl-nav [class*="owl-"]:hover i, .owl-theme .owl-controls .owl-nav [class*="owl-"]:focus i {
  background: #f54c53 !important;
}

.owl-theme .owl-dots {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.owl-carousel-fullwidth.owl-theme .owl-dots {
  bottom: 0;
  margin-bottom: -2.5em;
}

.owl-theme .owl-dots .owl-dot span {
  width: 10px;
  height: 10px;
  background: #FBB448;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  border: 2px solid transparent;
}
.owl-theme .owl-dots .owl-dot span:hover {
  background: none;
  border: 2px solid #FBB448;
}

.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
  background: none;
  border: 2px solid #FBB448;
}

.fh5co-card-item {
  display: block;
  width: 100%;
  position: relative;
  background: #fff;
  overflow: hidden;
  z-index: 9;
  bottom: 0;
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.18);
  -ms-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.18);
  -o-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.18);
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  -ms-border-radius: 0px;
  border-radius: 0px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.fh5co-card-item figure {
  height: 240px;
  overflow: hidden;
  z-index: 12;
  position: relative;
}
.fh5co-card-item figure .overlay {
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.7s;
  -o-transition: 0.7s;
  transition: 0.7s;
}
.fh5co-card-item figure .overlay i {
  z-index: 12;
  color: #fff;
  font-size: 30px;
  position: absolute;
  margin-left: -15px;
  margin-top: -45px;
  top: 50%;
  left: 50%;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.fh5co-card-item img {
  z-index: 8;
  opacity: 1;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.fh5co-card-item .fh5co-text {
  padding: 0px 10px 10px 20px;
  text-align: center;
  position: relative;
  z-index: 22;
}
.fh5co-card-item .fh5co-text:before {
  position: absolute;
  top: -40px;
  right: 0;
  left: 0;
  width: 103%;
  margin-left: -4px;
  height: 50px;
  z-index: -1;
  content: "";
  background: #fff;
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  -ms-transform: rotate(4deg);
  -o-transform: rotate(4deg);
  transform: rotate(4deg);
}
.fh5co-card-item .fh5co-text h2, .fh5co-card-item .fh5co-text span {
  text-decoration: none !important;
}
.fh5co-card-item .fh5co-text h2 {
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 10px 0;
  color: #FBB448;
}
.fh5co-card-item .fh5co-text span {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 400;
}
.fh5co-card-item .fh5co-text p {
  color: #000;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.fh5co-card-item .fh5co-text span.price {
  opacity: 1;
  visibility: visible;
  bottom: 0;
  font-size: 30px;
  color: #FBB448;
  position: relative;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.fh5co-card-item:hover, .fh5co-card-item:focus {
  bottom: 7px;
  text-decoration: none;
  -webkit-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  -ms-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  -o-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
}
.fh5co-card-item:hover img, .fh5co-card-item:focus img {
  -webkot-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
.fh5co-card-item:hover span.btn, .fh5co-card-item:focus span.btn {
  opacity: 1;
  visibility: visible;
  bottom: 0px;
  border: 2px solid #fcbe61 !important;
  background: #fcbe61 !important;
}
.fh5co-card-item:hover figure .overlay, .fh5co-card-item:focus figure .overlay {
  opacity: 1;
  visibility: visible;
}
.fh5co-card-item:hover figure .overlay i, .fh5co-card-item:focus figure .overlay i {
  margin-top: -15px;
}
.fh5co-card-item:hover h2, .fh5co-card-item:hover span, .fh5co-card-item:focus h2, .fh5co-card-item:focus span {
  text-decoration: none !important;
}

@media screen and (max-width: 768px) {
  .macbook-wrap img {
    max-width: 100%;
  }
}

.price-box {
  background: #fff;
  border: 2px solid #ECEEF0;
  text-align: center;
  padding: 30px;
  margin-bottom: 40px;
  position: relative;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
}
.price-box.popular {
  border: 2px solid #FBB448;
}
.price-box.popular .popular-text {
  top: 0;
  left: 50%;
  margin-left: -54px;
  margin-top: -2em;
  position: absolute;
  padding: 4px 20px;
  background: #FBB448;
  color: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
.price-box.popular .popular-text:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-top: 10px solid black;
  border-top-color: #FBB448;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.pricing-plan {
  margin: 0 0 30px 0;
  padding: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
}

.price {
  font-size: 50px;
  color: #000;
}
.price .currency {
  font-size: 20px;
  top: -1.2em;
}
.price small {
  font-size: 16px;
}

.pricing-info {
  padding: 0;
  margin: 0 0 30px 0;
}
.pricing-info li {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

.fh5co-faq-list {
  margin: 0;
  padding: 0;
}
.fh5co-faq-list li {
  margin: 0 0 40px 0;
  padding: 0;
  line-height: 1.5;
  list-style: none;
}
@media screen and (max-width: 768px) {
  .fh5co-faq-list li {
    margin: 0 0 20px 0;
  }
}
.fh5co-faq-list li h2 {
  font-size: 26px;
  font-weight: 300;
  margin-bottom: 15px;
}
@media screen and (max-width: 768px) {
  .fh5co-faq-list li h2 {
    font-size: 26px;
  }
}

/*# sourceMappingURL=style.css.map */


`;
