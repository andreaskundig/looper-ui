const defaultHtmlTemplateStr = ` 
    <div class="menu nine-buttons">
      <div id="color-button">
        <!-- 1_couleur+2_taille_5.svg is inlined so we can change its color -->
        <svg  version="1.1" id="Calque_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387"
              enable-background="new 0 0 113.387 113.387"
              xml:space="preserve">
          <g>
            <defs><circle id="SVGID_21_" cx="56.692" cy="56.693" r="44.628"/>
            </defs>
            <clipPath id="SVGID_2_">
              <use xlink:href="#SVGID_21_"  overflow="visible"/>
            </clipPath>
            <use xlink:href="#SVGID_21_"  overflow="visible" fill="none"
                 stroke-width="2" stroke-miterlimit="10"/>
          </g>
          <path d="M101.322,56.699c0,24.648-19.98,44.622-44.629,44.622S12.064,
                   81.348,12.064,56.699
                   c0-24.649,19.98-44.636,44.629-44.636S101.322,32.05,101.322,
                   56.699z"/>
        </svg>
      </div><div id="stroke-button" ><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	<defs>
		<circle id="SVGID_17_" cx="56.692" cy="56.693" r="44.628"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use xlink:href="#SVGID_17_"  overflow="visible"/>
	</clipPath>
	<use xlink:href="#SVGID_17_"  overflow="visible" fill="none" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
</g>
<path fill="#1D1D1B" d="M79.008,56.696c0,12.323-9.99,22.31-22.314,22.31c-12.323,0-22.313-9.986-22.313-22.31
	c0-12.325,9.99-22.317,22.313-22.317C69.018,34.379,79.008,44.371,79.008,56.696z"/>
</svg>

      </div><div id="timing-button"><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	
		<circle fill="none" stroke="#1D1D1B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,14.0165" cx="56.692" cy="56.693" r="44.628"/>
</g>
</svg>

      </div><div id="clear-button"><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	<defs>
		<circle id="SVGID_6_" cx="56.693" cy="56.693" r="44.628"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use xlink:href="#SVGID_6_"  overflow="visible"/>
	</clipPath>
	<use xlink:href="#SVGID_6_"  overflow="visible" fill="none" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
</g>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="41.998" y1="41.997" x2="71.389" y2="71.389"/>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="41.998" y1="71.389" x2="71.389" y2="41.997"/>
</svg>

      </div><div id="undo-button"><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	<defs>
		<circle id="SVGID_31_" cx="56.693" cy="56.693" r="44.628"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use xlink:href="#SVGID_31_"  overflow="visible"/>
	</clipPath>
	<use xlink:href="#SVGID_31_"  overflow="visible" fill="none" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
</g>
<g>
	<g>
		<path fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M35.716,50.683
			c15.25,0,24.884,0,32.384,0"/>
		
			<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="35.716" y1="50.683" x2="40.716" y2="43.558"/>
		
			<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="40.716" y1="57.808" x2="35.716" y2="50.683"/>
	</g>
	<path fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M68.1,50.683
		c5.286,0,9.572,4.286,9.572,9.573c0,5.286-4.286,9.572-9.572,9.572"/>
</g>
</svg>

      </div><div id="redo-button"><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	<defs>
		<circle id="SVGID_39_" cx="56.693" cy="56.693" r="44.628"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use xlink:href="#SVGID_39_"  overflow="visible"/>
	</clipPath>
	<use xlink:href="#SVGID_39_"  overflow="visible" fill="none" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
</g>
<g>
	<g>
		<path fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M77.671,50.683
			c-15.25,0-24.884,0-32.384,0"/>
		
			<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="77.671" y1="50.683" x2="72.671" y2="43.558"/>
		
			<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="72.671" y1="57.808" x2="77.671" y2="50.683"/>
	</g>
	<path fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M45.287,50.683
		c-5.286,0-9.572,4.286-9.572,9.573c0,5.286,4.286,9.572,9.572,9.572"/>
</g>
</svg>

      </div><div id="pause-button"><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	<defs>
		<circle id="SVGID_27_" cx="56.693" cy="56.693" r="44.628"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use xlink:href="#SVGID_27_"  overflow="visible"/>
	</clipPath>
	<use xlink:href="#SVGID_27_"  overflow="visible" fill="none" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
</g>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="47.796" y1="71.001" x2="47.796" y2="42.385"/>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="65.591" y1="71.001" x2="65.591" y2="42.385"/>
</svg>

      </div><div id="export-button"><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	<defs>
		<circle id="SVGID_25_" cx="56.693" cy="56.693" r="44.628"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use xlink:href="#SVGID_25_"  overflow="visible"/>
	</clipPath>
	<use xlink:href="#SVGID_25_"  overflow="visible" fill="none" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
</g>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="46.079" y1="65.832" x2="75.47" y2="47.554"/>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="46.079" y1="65.832" x2="37.917" y2="54.47"/>
</svg>

      </div><div id="info-button"><svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="113.387px" height="113.387px" viewBox="0 0 113.387 113.387" enable-background="new 0 0 113.387 113.387"
	 xml:space="preserve">
<g>
	<defs>
		<circle id="SVGID_29_" cx="56.693" cy="56.693" r="44.628"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use xlink:href="#SVGID_29_"  overflow="visible"/>
	</clipPath>
	<use xlink:href="#SVGID_29_"  overflow="visible" fill="none" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10"/>
</g>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="56.693" y1="71.001" x2="56.693" y2="53.443"/>
<line fill="none" stroke="#1D1D1B" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="56.693" y1="44.109" x2="56.693" y2="42.385"/>
</svg>

      </div>
    </div>
    
    <div id="overlay" class="hidden"> </div>
    <div id="color-submenu" class="submenu hidden"> </div>
    <div id="timing-submenu" class="submenu hidden"> </div>
    <div id="stroke-submenu" class="submenu hidden"> </div>
    <div id="info-submenu" class="submenu hidden"></div>
    <div id="export-submenu" class="submenu hidden"></div>
    <div id="dialog-submenu"></div>
    <div id="canvas-parent"><canvas  id="main-canvas"></canvas></div>
    <div class="hidden"><canvas id="hidden-canvas"></canvas></div>
`;

export default defaultHtmlTemplateStr;