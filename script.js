
	let exercises = document.querySelector('.exercises-2');
	function anmated(){
			exercises.addEventListener('mousemove',e=>{
		let i = document.createElement('i');
		i.className='bubbles'
		i.style.left = e.clientX +'px';
		i.style.top = e.clientY +'px';
		let randomSize=( Math.random() * 2) + 1;
		i.style.scale=randomSize;
		i.style.setProperty('--x', random())
		i.style.setProperty('--y', random())
		
		
		exercises.append(i)
			function random(){
				return (Math.random() * exercises.clientWidth - (exercises.clientWidth / 2) )+'px';
			}
		setTimeout(()=>{
			i.remove()
			
		},2500)
		
	});
	
	}
	anmated()
	

		exercises.addEventListener('touchend',e=>{
			anmated()
			
		
		})