let myDivs = document.querySelectorAll('#grid div');

[ ...myDivs ].forEach((div) => {
	div.addEventListener('click', () => {
		if (div.className === 'bg1') {
			div.classList.remove('bg1');
			div.classList.add('bg2');
		} else {
			div.classList.remove('bg2');
			div.classList.add('bg1');
		}
	});
});
