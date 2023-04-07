
export default function Jawa(props) {
    return(
        <svg viewBox="0 0 285 85" strokeLinecap="round" strokeLinejoin="round" stroke="white"  strokeWidth="1" className="fill-gray1 overflow-visible my-12" xmlns="http://www.w3.org/2000/svg">
            <path className={`${props.chosenProv === 'Bali' ? 'fill-orange1 ' : ''}`}d="M274.775 79.1272L275.256 79.7283L275.376 80.3294L275.857 80.9305L276.097 81.6517L275.616 82.1326L275.256 82.7337L274.414 82.4932L272.972 81.4113L272.611 80.9305L272.251 80.8102L272.01 80.69L272.13 80.4496L273.092 79.2474L273.332 79.1272H273.813L274.174 79.007L274.775 79.1272ZM272.972 65.9035L273.813 66.5046L274.534 67.2258L275.977 69.0291L276.818 69.7504L277.9 70.4717L278.501 71.3132L278.14 72.3951L277.9 72.7558L277.059 73.3569L276.578 73.7175L275.857 74.3186L275.616 74.559L273.813 74.7995L273.453 74.9197L273.332 75.5208L272.852 75.8814L269.366 77.0835L268.284 77.8048L267.443 78.7666L266.842 79.8485L266.481 80.2092L265.88 80.4496L265.399 80.5698L265.159 81.0506V81.6517L265.64 82.2528L265.76 82.0124L265.64 81.8922L265.399 81.5315L265.88 81.2911L266 81.7719V82.9741L265.76 83.3348L265.399 83.5752L264.918 83.6954L264.558 83.8156H263.957H263.356L262.755 83.6954L262.274 83.3348V82.9741L262.875 82.6135L263.957 82.0124L264.317 81.6517L264.558 81.0506L264.678 80.4496L264.438 79.9687L264.317 79.7283L263.957 78.8868L263.236 78.6463L262.514 78.0453L262.154 77.5644L262.034 77.2038L261.793 76.8431L261.312 76.4825L260.471 75.8814L258.668 74.1984L257.947 73.7175L254.581 72.0345L253.499 71.9143H250.374L249.533 71.5536L248.691 70.9525L248.09 70.2312L245.927 67.1057L245.446 64.5811L245.566 63.8598L246.287 63.7396H246.888L247.249 63.98L247.489 64.3407L247.85 64.7014L248.211 64.9418L248.691 64.8215L249.292 64.3407L249.773 64.5811L250.254 64.7014L251.336 64.8215L251.817 64.9418L256.144 66.5046L256.985 66.1439H259.389L260.471 65.9035L261.433 65.1822L263.356 63.2587L264.317 62.8981L264.918 62.7779L265.399 62.8981L266 63.1385L266.361 63.4992L266.842 63.7396L268.645 64.1003L272.972 65.9035Z"/>
            <path className={`${props.chosenProv === 'Jawa Timur' ? 'fill-orange1 ' : ''}`}d="M217.319 74.4388H215.276L215.035 74.3186L214.915 73.8377L215.035 73.4771L215.396 73.1165L215.156 72.7558L216.478 73.1165H217.92L218.281 73.3569L218.401 73.7175V74.0782L218.281 74.1984L218.04 74.3186L217.319 74.4388ZM250.014 38.9752V39.3359L249.893 39.4561L247.61 39.2156H247.129H246.768L246.648 39.0954V38.855L246.768 38.6146H246.888L247.85 38.1337H248.09H248.331L248.932 38.3741L249.172 38.4943H249.773L250.014 38.6146V38.9752ZM283.189 38.3741V39.3359L282.708 39.9369L281.746 40.1773L280.544 40.0572L279.583 39.4561L279.222 38.9752L279.463 38.7348H279.703H279.943L280.184 38.1337H280.304L280.424 38.3741L280.544 38.6146L280.785 38.855L280.905 38.9752H281.266L281.867 39.2156H282.588H282.828L282.468 38.9752V38.6146L282.588 38.3741L282.708 38.2539L282.948 38.3741L283.069 38.0135H283.189V38.3741ZM244.124 38.4943L244.004 39.2156V39.6965H243.643L243.042 39.4561L242.441 39.2156L242.201 38.9752H241.72L241.359 38.855L240.878 37.6528L240.758 37.172L241.479 36.4507L242.201 36.3305L242.681 36.4507L243.042 36.8113L243.763 38.0135L244.124 38.4943ZM233.426 31.8825L234.027 32.1229L234.508 32.3633L234.868 32.8442L235.469 32.9644L236.191 33.3251L236.551 33.6857L237.032 34.5272L236.311 34.6475L235.109 35.3687L233.186 35.6092L232.585 36.2102L232.104 36.3305H231.383L230.902 36.5709L230.301 37.5326L230.782 37.6528L231.022 37.8933V38.2539L230.421 38.3741L229.339 38.4943L227.897 38.3741L226.094 38.0135H225.613L225.012 37.8933L224.531 38.4943H223.57L223.089 38.7348L222.848 39.0954L222.728 39.4561L222.488 39.8167L222.247 40.6582L222.007 41.1391L221.045 41.6199L220.925 41.3795L220.565 41.1391L219.964 40.8986L218.641 41.0189L214.675 40.7784L214.194 40.538H213.713L212.511 40.8986L211.91 40.7784L211.79 39.9369L211.429 39.5763V39.4561L211.79 39.2156V38.9752H211.429L210.828 38.7348H210.588L210.468 38.9752V39.5763L210.348 39.6965L210.708 40.0572L211.189 40.4178L211.55 40.6582L211.429 41.0189L210.949 41.1391L202.895 39.3359L201.813 39.2156L200.972 39.3359L200.491 39.2156L200.371 38.9752L200.251 38.1337V37.773L200.491 37.4124L200.371 37.172L200.01 37.6528L199.89 37.4124L199.65 37.0518V36.5709V36.09L199.89 35.9698L200.131 35.8496L200.732 35.7294L201.453 35.3687L202.174 34.6475L203.616 33.0846L203.496 32.6038L204.338 32.3633L205.419 32.2431L206.141 32.1229L207.102 32.2431L209.386 31.8825L211.429 32.2431H214.795L219.242 32.0027L221.406 32.3633L225.132 31.8825L228.378 32.0027L231.743 31.5218L232.945 31.6421L233.426 31.8825ZM269.726 30.6803L271.89 30.9208L272.491 31.1612L274.294 32.1229L274.775 32.4835V33.2048L274.414 33.4453H273.212L272.972 33.3251L272.491 33.0846H272.01L271.65 32.8442L271.409 32.724H271.289L271.169 32.8442L270.928 32.9644L270.808 33.0846L270.448 32.9644L270.087 32.724H269.847L269.005 33.0846L268.885 33.2048V33.4453L269.125 33.5655L269.486 33.6857L269.726 33.8059L270.087 34.0464L270.327 34.2868L269.726 34.7676L269.125 34.5272L268.164 33.8059L267.803 34.1666L267.683 34.407L267.803 34.6475L267.923 34.8879V35.0081L267.683 35.2485H267.443L267.322 35.1283L266.721 34.6475V34.407L267.082 33.4453L266 33.5655L265.64 33.4453L265.399 33.2048L265.519 32.4835L265.76 32.2431L266.12 31.8825L266.481 31.4016L266.241 31.041L266.481 30.8005L267.082 30.6803H267.563H269.726ZM153.974 67.3461V67.1057L154.455 65.9035V65.5428L154.334 64.9418L154.575 64.4609L154.935 63.9801L155.416 63.6194L156.378 63.0183L158.061 61.5757L159.383 60.8544L160.104 60.4938L160.465 60.2534L161.066 59.7725H161.426L162.027 60.1331H162.268L162.748 59.7725L162.869 58.8108L163.349 57.7288L163.47 57.1278L163.59 56.0458L163.47 55.6852L163.349 55.4447L162.989 55.0841L162.388 54.3628L162.027 54.1224L161.787 54.0021L160.825 53.882L160.465 53.6415L160.344 53.2809V52.8L160.224 52.3191V52.1989L160.344 51.9585L160.945 51.4776L161.066 51.2372L160.825 50.8766L160.585 50.3957L160.224 48.9531L160.705 45.7073V45.2264L160.585 44.3849V43.1827L160.705 42.1008L161.186 41.6199L161.907 41.7402L162.268 41.9806L162.748 42.1008H162.989L163.47 41.9806L163.59 42.1008L163.95 42.221L164.311 42.4615L165.994 43.0625L167.076 43.1827V42.9423V42.7019L167.436 42.221L167.797 41.9806L168.278 41.6199L168.999 41.1391L169.48 40.7784L169.84 40.2976L170.922 39.3359L171.283 39.0954L171.403 38.855L171.283 38.6146L171.042 37.5326V37.172L171.162 36.3305L171.042 34.0464L171.643 30.9208V30.4399L171.884 29.8388L172.845 28.1558L172.965 28.0356L173.566 28.6367L174.167 28.9973L174.768 29.3579L176.451 29.7186L177.653 29.8388L178.014 29.959H178.495L179.096 29.8388L179.937 29.3579L180.418 29.2377L180.899 29.3579L181.74 30.3197L183.303 32.2431L183.783 32.6038L184.384 32.724H185.466L186.548 32.4835L187.51 32.2431L187.75 32.1229H188.832H189.313L190.394 31.7622L190.995 31.6421L191.957 31.7622L192.318 32.0027L192.919 31.6421L193.399 31.7622L193.88 32.1229L194.241 32.4835L194.601 32.724L195.202 32.8442H195.683L196.044 32.6038L196.284 32.1229L196.164 31.5218H196.404L196.765 31.6421L196.885 31.7622L197.126 32.0027L197.246 32.4835V33.0846L196.885 34.1666L196.765 34.7676L196.885 35.0081L197.486 35.9698L197.727 36.09L197.967 36.2102L198.328 36.09H198.688L198.929 36.4507L198.087 36.6911L197.606 36.9315L197.486 37.172L197.606 37.4124L197.727 37.8933L198.087 38.2539L198.328 38.4943L198.688 38.6146L199.169 39.0954L199.409 39.6965L199.289 40.0572L198.929 40.2976L197.246 40.0572L197.727 40.6582L198.328 41.1391L199.77 41.7402L200.251 41.3795L200.611 40.8986L200.972 40.4178L201.573 40.2976L202.054 40.4178L202.414 40.7784L202.655 41.2593L203.015 41.9806L203.136 42.3412V42.7019L202.895 43.6636V44.1445V45.2264L202.655 45.7073L201.693 46.4286L201.453 46.9094V49.0733L203.616 50.6361L206.862 52.0787L207.343 52.1989H208.064L208.545 52.3191L209.146 52.4394L209.626 52.9202L210.588 53.7617L211.069 54.2426L211.91 54.3628L212.511 54.6032L212.872 54.7234H213.112L213.593 54.6032H213.954L214.434 54.8437L215.035 55.6852L215.396 55.8054L216.117 55.6852L216.598 55.565L217.439 54.9639L218.401 54.483L219.002 54.2426L219.603 54.1224L219.964 54.0021L220.805 53.5213H221.406L224.892 54.0021H225.132L225.613 53.7617L225.853 53.6415H226.454L227.536 54.1224H228.137L228.618 54.0021L228.979 53.7617L229.459 53.1607L229.94 52.9202H230.301L230.782 53.0404L231.383 53.1607L231.863 53.0404L232.344 52.9202L234.147 51.3574L234.868 51.117L235.71 51.5978L236.792 52.9202L237.393 53.5213L238.234 53.882H238.835L239.917 53.5213H240.518L240.878 53.6415L241.84 54.6032L242.201 54.8437H242.441L242.802 54.9639L243.403 54.8437H243.643L243.883 54.9639L244.364 55.4447L245.326 55.9256L245.686 56.4065L245.927 56.8873V57.4884L245.686 58.5704V58.8108L245.326 59.2917L245.206 59.6523V59.8927L245.446 60.4938V61.8162L244.244 65.5428L243.282 70.8323L243.162 71.5536L243.042 72.1547V72.3951L243.162 72.7558L243.403 73.3569L243.523 74.559V75.0399L243.883 75.2803L244.244 75.0399L244.364 74.3186V73.1165L244.725 73.5973L244.845 74.4388V76.242L245.085 76.7229L245.326 77.324L245.807 77.6846L246.167 77.8049L246.768 77.9251H247.009L247.73 78.4059L249.052 78.8868L249.292 79.2474L249.533 79.4879L249.773 79.8485L250.014 80.3294V80.9305L249.292 81.8922H248.211L245.927 81.1709L245.326 81.0507L243.883 81.1709L243.282 80.9305L243.403 80.5698L244.004 79.8485L243.763 78.8868L242.802 78.0453L241.6 77.5644L240.518 77.4442L239.556 78.1655L238.835 78.4059L238.595 78.1655L238.354 77.6846L237.633 77.8049L236.431 78.1655H236.191L235.229 78.0453L235.109 77.9251L234.868 77.4442L234.628 77.324L234.027 77.4442L233.546 77.6846L233.186 77.8049L232.945 77.324V77.0836L233.065 76.7229V76.3623L232.825 76.242H232.585L231.984 76.4825L231.743 76.6027L231.262 76.4825L230.541 76.3623L229.94 76.0016L229.459 75.641L229.219 75.8814L228.979 75.641L228.858 74.7995L228.618 74.559L228.257 74.6792L227.777 74.7995L227.416 75.0399L227.176 75.2803H226.935H226.575H226.454V74.7995V74.559L226.094 74.3186L225.613 74.4388H225.132L224.772 74.1984L224.291 73.4771L224.05 73.3569L223.209 73.1165L223.089 72.9962L222.728 72.6356H222.608L221.767 72.7558H221.406L220.444 72.1547L220.084 71.7941L219.964 71.4334L219.843 71.3132H219.242L218.882 71.5536L218.401 71.6739L217.92 71.4334L216.718 69.9908L216.117 69.51L215.035 69.0291L213.954 68.7887L212.752 68.6685L209.506 69.1493L208.304 69.3898L207.343 69.8706L206.02 71.4334L205.059 72.0345L204.217 71.6739L203.857 71.7941L203.256 71.3132L203.136 71.6739L202.895 71.7941L202.655 71.9143L202.414 71.7941L202.174 71.6739L202.054 71.5536L201.573 71.7941L201.212 72.1547L201.092 72.2749L200.732 72.3951H200.251L199.89 72.5154L199.53 72.7558L199.049 73.1165L198.688 72.876L197.486 72.3951L196.525 72.1547L195.082 71.6739H193.039L192.678 71.5536L192.318 71.4334L191.957 71.193H191.356L191.596 70.8323L191.116 70.3515L190.394 70.1111H189.793H189.192H188.952L188.231 70.4717L187.87 70.3515H187.75L187.51 70.1111L187.029 69.8706L182.221 69.3898L181.62 69.2695L180.778 68.6685H180.538L179.817 69.1493L179.697 69.3898H179.456L178.855 69.1493L178.254 68.5482L177.894 68.428L177.172 68.5482L176.932 68.428L176.331 68.1876H176.091L175.85 68.3078L175.61 68.7887V69.3898L175.49 69.7504L175.009 69.8706L174.889 69.7504L174.768 69.51L174.648 69.1493L174.408 69.0291L174.167 69.1493L174.047 69.3898L173.807 69.8706L173.566 70.2312V70.4717L173.927 70.7121L174.047 70.9526L173.927 71.0728L173.566 71.193L172.965 71.0728L172.485 70.8323L172.124 70.4717L171.884 69.8706H171.763L171.403 70.2312H171.042L170.081 69.7504H169.72L169.359 69.9908L168.999 70.1111L167.196 69.6302L166.955 69.2695V68.9089V68.6685L166.475 68.428H166.354L165.874 68.6685H165.633L165.513 68.5482L165.152 68.3078H164.912H163.59H163.229H163.109L162.869 68.0674L162.628 67.9472H162.388L162.147 68.0674L162.027 68.1876L159.864 68.7887H159.623L159.503 68.3078L159.263 68.0674L159.022 67.9472H158.782L158.421 67.7067L158.301 67.4663V67.1057L158.181 66.8652H157.94L157.7 67.3461L157.339 67.9472L157.219 68.0674H156.979H155.897L155.416 67.9472L153.974 67.3461ZM200.131 1.82856L200.491 2.18921L200.732 2.54986L200.852 3.15094V3.75202L200.611 4.23287L200.251 4.59354L199.77 4.83395H199.53H198.808L198.688 4.71373L198.568 4.47332L198.448 4.59354L197.967 4.83395L197.366 4.71373L197.126 4.47332L197.005 3.99247L196.765 3.39137L196.885 3.15094L197.727 2.54986V2.42964L198.328 1.70836L198.688 1.82856L199.049 1.70836L199.409 1.58813H199.77L200.131 1.82856Z"/>

            <path className={`${props.chosenProv === 'Yogyakarta' ? 'fill-orange1 ' : ''}`} d="M151.329 66.6248L147.964 66.5046L147.723 66.3844L147.363 66.0237L147.122 65.9035H146.642L146.041 65.6631L145.079 65.1822V65.4226L143.637 64.7014L142.915 64.5811L142.314 64.4609L141.834 64.3407L140.031 63.379H139.55L139.309 63.2588L139.189 63.1385L138.588 62.5375L138.468 62.4172L137.867 61.9364L137.627 61.8161H136.785L130.415 58.4501L130.535 57.849L130.655 57.6086L131.016 57.1277L132.338 55.0841L132.578 54.6032L132.698 54.1224V53.4011V53.1606L132.939 52.9202L133.54 52.5596L135.102 52.8H135.343L135.583 52.6798L135.703 52.8L135.824 52.9202L135.944 53.5213L136.064 53.8819L136.304 53.6415L136.785 53.0404L137.146 52.6798L140.031 50.5159L140.752 49.7946L140.872 50.035L141.713 54.0021L142.194 54.9639L142.555 55.6852L143.396 56.4064L144.478 56.6469H145.92L146.401 56.7671L147.363 56.6469L147.723 56.7671L149.046 57.0075L149.526 57.248L149.767 57.4884L149.887 58.0895V59.2917L150.007 60.0129L150.127 64.5811L150.248 64.8215L150.488 65.062H150.728L150.849 64.9418H151.209L151.329 66.6248Z"/>

            <path className={`${props.chosenProv === 'Jawa Tengah' ? 'fill-orange1 ' : ''}`} d="M102.168 54.0021L103.49 54.8437L103.85 55.0841H104.331L104.451 55.3245L104.331 55.565H104.211H103.971L103.249 55.4447L101.807 54.9639L100.244 54.6032L99.8838 54.483L99.5232 54.3628L98.4414 54.483L98.0808 54.3628L97.8404 54.0021L97.9606 53.5213L98.201 53.1606L98.5616 52.9202L100.004 53.5213L101.326 53.7617L102.168 54.0021ZM172.965 28.0356L172.845 28.1558L171.884 29.8388L171.643 30.4399V30.9207L171.042 34.0464L171.162 36.3305L171.042 37.1719V37.5326L171.283 38.6145L171.403 38.855L171.283 39.0954L170.922 39.3358L169.84 40.2976L169.48 40.7784L168.999 41.1391L168.278 41.6199L167.797 41.9806L167.436 42.221L167.076 42.7019V42.9423V43.1827L165.994 43.0625L164.311 42.4615L163.95 42.221L163.59 42.1008L163.47 41.9806L162.989 42.1008H162.748L162.268 41.9806L161.907 41.7402L161.186 41.6199L160.705 42.1008L160.585 43.1827V44.3849L160.705 45.2264V45.7073L160.224 48.9531L160.585 50.3957L160.825 50.8766L161.066 51.2372L160.945 51.4776L160.344 51.9585L160.224 52.1989V52.3191L160.344 52.8V53.2809L160.465 53.6415L160.825 53.8819L161.787 54.0021L162.027 54.1224L162.388 54.3628L162.989 55.0841L163.349 55.4447L163.47 55.6852L163.59 56.0458L163.47 57.1277L163.349 57.7288L162.869 58.8108L162.748 59.7725L162.268 60.1331H162.027L161.426 59.7725H161.066L160.465 60.2534L160.104 60.4938L159.383 60.8544L158.061 61.5757L156.378 63.0183L155.416 63.6194L154.935 63.98L154.575 64.4609L154.334 64.9418L154.455 65.5428V65.9035L153.974 67.1057V67.3461L153.613 67.2258L151.45 66.745L151.329 66.6248L151.209 64.9418H150.849L150.728 65.062H150.488L150.248 64.8215L150.127 64.5811L150.007 60.0129L149.887 59.2916V58.0895L149.767 57.4884L149.526 57.248L149.046 57.0075L147.723 56.7671L147.363 56.6469L146.401 56.7671L145.92 56.6469H144.478L143.396 56.4064L142.555 55.6852L142.194 54.9639L141.713 54.0021L140.872 50.035L140.752 49.7946L140.031 50.5159L137.146 52.6798L136.785 53.0404L136.304 53.6415L136.064 53.8819L135.944 53.5213L135.824 52.9202L135.703 52.8L135.583 52.6798L135.343 52.8H135.102L133.54 52.5596L132.939 52.9202L132.698 53.1606V53.4011V54.1224L132.578 54.6032L132.338 55.0841L131.016 57.1277L130.655 57.6086L130.535 57.849L130.415 58.4501L130.174 58.3299L127.53 57.6086L126.929 57.1277L126.328 57.248L125.366 57.1277L124.405 56.7671L122.842 56.4064L120.438 55.6852L115.87 55.0841L114.909 55.3245L114.428 55.4447L114.188 55.2043L114.067 54.9639L113.707 54.8437L113.587 54.7234V54.6032L113.827 54.2426V54.1224H113.587L112.865 53.8819L108.418 53.4011L105.774 53.1606L104.451 53.5213L104.091 54.0021L103.85 54.3628H103.61L102.769 53.6415L102.528 53.5213H102.288L101.687 53.4011H101.086L100.725 53.1606L100.365 52.9202L100.124 51.718L99.8838 51.117L99.5232 51.2372L99.403 51.3574L98.6818 51.5978L98.5616 51.8383L98.201 52.3191L97.9606 52.5596L96.5182 51.3574L96.2778 50.9967V50.6361L96.5182 49.9148V49.1935L95.9172 47.2701L95.797 46.1881L95.6768 45.4669L95.5566 45.3466L94.7152 44.986L94.595 44.1445L94.4748 44.0242H94.1142L93.5132 44.2647L93.2728 44.1445L93.0324 43.904L92.9122 43.5434L91.59 43.1827L91.4698 42.3412L92.0708 40.2976V39.6965L92.191 39.3358L92.4314 38.9752L92.6718 38.7348L93.1526 38.6145H93.6334L94.595 38.7348H95.3162L95.9172 38.4943L96.5182 38.0135L96.8788 37.6528L97.2394 37.2922L97.4798 36.9315L97.7202 36.6911L97.8404 36.3305L97.7202 35.8496V35.0081L97.9606 33.6857L98.0808 33.3251L98.6818 32.2431L100.485 30.1994L100.725 30.3197L100.966 30.6803L101.206 30.9207L101.807 31.041H102.408L102.769 30.9207L103.009 30.5601V29.959L103.249 29.4781H103.73L104.331 29.7186L104.692 29.8388L105.653 30.5601L106.254 30.8005L106.976 31.2814H107.216H107.817L112.385 31.7622L114.668 31.4016L116.111 29.8388L117.072 30.6803L122.121 31.4016L126.688 32.8442L127.77 33.0846L128.972 32.9644L132.338 32.4835L132.939 32.3633L133.299 32.1229V31.8825L133.78 31.4016L134.021 31.2814L134.261 31.4016L134.381 31.6421V31.8825L134.501 32.1229L134.862 32.3633L136.064 32.9644L137.026 33.2048L138.107 34.0464L138.588 34.2868L139.309 34.407L139.79 34.1665L140.151 33.9261L140.632 33.8059H141.233L141.713 33.6857L142.074 33.4453L143.156 32.2431L144.238 30.6803L146.161 26.8334L146.521 25.6313L146.642 24.6695V23.5876L146.762 23.1067L147.002 22.7461L147.122 22.5057L146.882 21.9046L147.363 21.7844L147.603 21.5439L148.084 20.9428L148.445 20.8226L149.767 20.2216L150.488 20.1013L151.089 19.8609L151.329 19.7407L152.892 19.5003L153.493 19.38L153.733 19.5003L154.455 19.9811L154.695 20.1013H155.296H155.536L155.777 19.8609L155.897 19.9811L156.137 20.2216L156.498 20.462L156.738 20.7024L156.979 21.0631L157.099 22.145L157.58 23.1067L158.541 25.8717L159.022 26.7132L159.263 26.9536H159.503L164.431 27.4345H165.032L166.114 27.1941L166.595 27.0738L167.076 26.8334L167.917 25.6313L168.278 25.1504L168.999 25.6313L170.441 25.8717L171.403 26.2323L171.643 26.4728L172.485 27.5547L172.965 28.0356ZM141.112 5.43502L140.752 5.67547L140.632 5.43502L140.511 5.07439L140.391 4.83394L140.271 4.71372L140.632 4.47331L141.353 4.35309L141.473 4.59353V4.95417L141.112 5.43502Z"/>

            <path className={`${props.chosenProv === 'Jawa Barat' ? 'fill-orange1 ' : ''}`} d="M100.485 30.1995L98.6818 32.2431L98.0808 33.3251L97.9606 33.6857L97.7202 35.0081V35.8496L97.8404 36.3305L97.7202 36.6911L97.4798 36.9315L97.2394 37.2922L96.8788 37.6528L96.5182 38.0135L95.9172 38.4943L95.3162 38.7348H94.595L93.6334 38.6146H93.1526L92.6718 38.7348L92.4314 38.9752L92.191 39.3359L92.0708 39.6965V40.2976L91.4698 42.3412L91.59 43.1827L92.9122 43.5434L93.0324 43.904L93.2728 44.1445L93.5132 44.2647L94.1142 44.0243H94.4748L94.595 44.1445L94.7152 44.986L95.5566 45.3466L95.6768 45.4669L95.797 46.1881L95.9172 47.2701L96.5182 49.1935V49.9148L96.2778 50.6361V50.9967L96.5182 51.3574L97.9606 52.5596L97.7202 52.8L96.999 53.2809L96.1576 52.8L95.797 52.5596H95.5566L95.196 52.8L94.7152 53.2809L94.8354 53.7617V54.0021H94.7152L94.1142 53.882L93.994 53.2809L93.8738 53.1607H93.5132H91.7102L91.2294 53.2809L90.388 54.0021L90.2678 55.2043L90.0274 55.9256L88.9456 56.6469L85.7002 56.5267L80.772 55.8054L75.964 54.483H74.6418L73.56 54.6032L72.7186 54.2426V53.5213L72.1176 53.1607L71.3964 52.9202L69.7136 52.6798L68.9924 52.4394L68.752 51.8383L68.2712 51.2372L67.4298 50.7563L66.4682 50.035L65.5066 49.7946L64.7854 49.5542L63.5834 49.1935L63.343 48.5924H62.8622L62.2612 48.352H62.0208L61.7804 48.1116L60.4582 48.352L58.7754 48.1116L56.6118 47.8712L55.7704 47.5105L54.8088 47.3903L53.8472 47.0297L47.717 46.5488H45.5534L40.8656 46.0679L38.5818 45.8275L37.5 44.986L36.899 44.6253H36.298L35.5768 44.8658L35.3364 44.986V44.5051V43.904L34.7354 43.1827L34.9758 42.1008L34.8556 41.4997L34.9758 41.1391L35.3364 40.538L35.8172 39.9369L36.298 39.6965L36.6586 39.8167L37.1394 39.6965L37.2596 39.4561L36.899 38.855L37.3798 38.3741L38.3414 37.172L39.0626 36.4507V35.4889L38.9424 34.6475L38.2212 34.0464L37.5 34.1666L36.7788 33.8059L36.0576 34.0464L35.4566 34.7676L35.3364 34.1666V33.8059L35.4566 33.2049L35.697 32.4836L36.6586 30.6803L38.101 29.3579L38.2212 28.9973L37.7404 28.5165L37.3798 28.276L36.5384 28.0356L36.298 27.6749L36.0576 27.0738L35.5768 22.5057V21.6641L36.0576 20.9428L36.298 20.3418L36.1778 19.6205L36.0576 18.8992L35.9374 18.5385L36.1778 17.9375L36.7788 17.5768H37.0192L37.1394 17.8173L37.2596 18.1779L37.5 18.5385L37.7404 18.6588L38.101 18.5385L38.3414 18.1779L38.8222 18.0577H39.5434L40.1444 18.2981L40.6252 18.6588L41.4666 18.8992H44.2312L44.9524 18.5385L44.8322 18.0577V16.7353L45.1928 16.8555L45.4332 17.3364L45.5534 17.4566L45.914 17.697L46.1544 17.9375H46.515H46.7554L47.2362 17.5768L48.0776 17.9375L49.0392 18.779L49.52 18.5385L49.7604 17.8173L50.2412 16.014L50.4816 15.6534L50.6018 15.2927V14.9321V14.0906L50.722 12.5277V10.965V10.8447H50.8422L51.2028 10.6043L51.323 10.1234L51.4432 9.88303V9.52236L50.9624 8.80109L51.2028 8.44043L51.6836 7.71912L51.5634 6.75741L52.1644 6.51697L53.126 6.75741L54.0876 7.11805L54.328 7.47871L54.5684 7.71912L54.929 8.07979L55.53 8.20002H55.8906H56.3714L58.4148 7.59894L59.3764 7.71912L60.338 8.07979L60.939 9.0415L61.7804 10.3639L62.6218 11.4458L63.343 12.5277L64.4248 13.1288L65.747 13.6097L67.3096 13.7299L68.151 14.6917L68.752 15.0523L69.353 14.6917L69.7136 14.9321L70.1944 14.8119L70.4348 14.5714L71.0358 14.331L71.2762 14.2108H71.5166L71.9974 14.331H72.2378V14.0906V13.7299L72.5984 13.6097L73.1994 13.8501V14.2108H73.56L73.9206 13.7299H74.161L74.4014 14.331V14.8119L75.7236 15.6534L76.9256 16.1342L78.4882 16.8555L79.0892 17.096L79.57 17.3364H80.5316L80.8922 17.2162L81.2528 16.9757L81.974 16.6151L82.2144 16.2544L82.4548 16.014L82.575 15.6534L82.4548 15.2927L82.3346 15.0523L81.974 14.8119L82.3346 14.6917L82.8154 15.0523L83.6568 15.2927H85.2194L85.8204 15.6534L85.9406 15.2927H86.5416L86.6618 15.8938L86.9022 17.697L89.0658 20.3418L89.5466 20.5822L89.9072 20.7024L91.2294 21.5439L92.191 26.3525L92.9122 28.7569L94.4748 28.8771L95.5566 29.7186L96.6384 30.0792H97.8404L98.9222 29.4782L99.1626 29.7186L99.5232 29.8388L100.004 29.959L100.365 30.0792L100.485 30.1995Z"/>
            <path className={`${props.chosenProv === 'Jakarta' ? 'fill-orange1 ' : ''}`} d="M50.722 10.8447V10.965V12.5278L50.6018 14.0906V14.9321V15.2927L50.4816 15.6534L50.2412 16.014L49.7604 17.8173L49.52 18.5385L49.0392 18.779L48.0776 17.9375L47.2362 17.5768L46.7554 17.9375H46.515H46.1544L45.914 17.6971L45.5534 17.4566L45.4332 17.3364L45.1928 16.8555L44.8322 16.7353L44.5918 16.6151L44.3514 16.2545L43.9908 15.1725L43.2696 14.331L42.7888 11.4458L43.0292 11.0852L43.8706 10.3639H43.9908L44.2312 10.965L44.5918 11.3256L45.6736 11.4458H46.7554L50.722 10.8447Z"/>
            <path className={`${props.chosenProv === 'Banten' ? 'fill-orange1 ' : ''}`} d="M5.76722 22.6259V23.3472V24.3089L5.52681 25.2706L5.16622 25.6313L4.68541 25.8717L4.20462 26.4728L3.84401 26.593L3.60362 26.3525L3.72381 25.9919L3.84401 25.5111L4.08441 25.1504L3.84401 25.0302L3.60362 24.6695L3.48341 24.0685L2.28141 25.2706L2.04101 25.3908L1.92081 24.91L2.40162 24.1887L3.72381 23.1067L3.96422 23.3472L4.20462 23.1067L4.44501 22.8663H4.68541H4.80562L4.92581 22.7461L5.16622 22.6259H5.76722ZM43.9908 10.3639H43.8706L43.0292 11.0852L42.7888 11.4458L43.2696 14.331L43.9908 15.1725L44.3514 16.2544L44.5918 16.6151L44.8322 16.7353V18.0577L44.9524 18.5385L44.2312 18.8992H41.4666L40.6252 18.6587L40.1444 18.2981L39.5434 18.0577H38.8222L38.3414 18.1779L38.101 18.5385L37.7404 18.6587L37.5 18.5385L37.2596 18.1779L37.1394 17.8173L37.0192 17.5768H36.7788L36.1778 17.9374L35.9374 18.5385L36.0576 18.8992L36.1778 19.6205L36.298 20.3418L36.0576 20.9428L35.5768 21.6641V22.5057L36.0576 27.0738L36.298 27.6749L36.5384 28.0356L37.3798 28.276L37.7404 28.5164L38.2212 28.9973L38.101 29.3579L36.6586 30.6803L35.697 32.4835L35.4566 33.2048L35.3364 33.8059V34.1666L35.4566 34.7676L34.8556 35.0081L34.2546 35.1283L33.6536 35.0081L33.293 34.8879L32.8122 34.7676L32.4516 34.6474H32.3314L32.091 34.2868L31.9708 34.1666L31.6102 34.0464L31.49 33.8059L31.3698 33.5655L30.1678 32.724L29.3264 32.8442L28.2446 32.3633L26.3214 30.8005L25.1194 30.3197L24.3982 30.1995H23.9174L22.8356 30.4399L22.3548 30.5601L22.2346 30.9208L21.874 31.041L21.6336 30.6803L21.1528 30.8005H20.3114L19.1094 31.1612L18.6286 30.9208L17.7872 30.8005L17.1862 30.6803L14.4216 31.041L13.3398 31.2814L12.859 31.6421L11.8974 31.4016L11.5368 31.5218L11.1762 31.1612L10.8156 30.9208H10.3348L10.0944 31.1612L9.85401 31.2814L9.73381 31.1612L9.49341 30.8005L9.25301 30.5601L8.17122 30.0792H6.96922L6.72881 30.1995L6.60862 30.6803L6.48841 30.9208L6.24801 31.041H6.00762L5.52681 30.9208L5.28641 30.4399L5.04601 29.4782L4.68541 29.2377L4.56522 28.9973V28.8771L4.80562 28.7569L5.64701 28.8771L6.00762 28.7569L6.48841 28.3962L7.20962 27.6749L7.45001 27.1941L7.57022 26.7132L7.93081 26.3525L8.29141 26.2324L8.65201 26.3525L9.01262 26.7132L9.37322 27.0738L9.49341 27.3143L9.61362 27.6749V28.1558L10.2146 29.2377L10.3348 29.5984L10.6954 29.959L11.1762 30.1995L11.657 30.0792L12.0176 29.5984L12.3782 28.276L12.6186 27.7951L14.662 25.8717L15.1428 25.3908L15.263 24.91L15.0226 22.7461L15.6236 21.4237L15.9842 21.1833H16.5852L16.7054 22.145L17.066 22.3854L17.4266 22.7461H18.1478L19.2296 22.2652L19.9508 21.3035L20.3114 20.2216V19.2598L20.5518 14.8119L20.7922 13.8501L21.5134 11.6863L21.9942 10.6043L23.7972 8.68087L24.0376 8.56064L24.3982 8.3202L24.879 6.63719L25.48 5.91589L26.3214 5.67548L27.1628 5.7957L27.7638 6.39678L27.884 8.07979L28.0042 8.44042L28.3648 8.56064L29.086 9.0415L29.5668 9.16172L30.4082 8.68087L31.0092 7.83934L31.6102 7.23826L32.692 7.35849L34.3748 8.56064L34.9758 8.80109L35.5768 8.92128L37.2596 9.64258H37.8606L38.3414 9.40217L38.702 9.0415L39.303 8.92128H42.308L42.7888 9.0415L43.3898 9.28194L43.7504 9.52235L43.9908 10.0032V10.3639Z"/>
        </svg>
    )
}
