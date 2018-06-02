{
	/*Promise*/

	function timeout(ms){
		return new Promise((resolve,reject)=>{
			setTimeout(resolve,ms,'done');
		})
	}

	timeout(3000).then(res=>{
		console.log(res);
	})


}

{
	const p1 = new Promise((resolve,reject)=>{
		setTimeout(()=>reject(new Error('fails')),3000);
	})

	const p2 = new Promise((resolve,reject)=>{
		setTimeout(()=>resolve(p1),1000);
	})

	p2
	 .then(res=>{console.log('res')})
	 .catch(err=>{console.log('err')})
}

{
	const getJson = (obj)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				if(Reflect.get(obj,'age')>18){
					return resolve(obj)
				}else{
					return reject(new Error('年龄不满足条件'))
				}
			},1000)
		})
	}

	getJson({name:'simba',age:30}).then(res=>{
		console.log(res);
		return getJson({name:'simba988',age:10});
	}).then(res=>{
		console.log(res);
	}).catch(err=>{
		console.log(err);
	})
}

{
	const loadImgs =(src)=>new Promise((resolve,reject)=>{
		let img = document.createElement('img');
		img.src = src
		img.onload=()=>resolve(img);
		img.noerror=()=>reject(new Error('加载失败'))
	})

	const showImgs = (imgs)=>{
		Array.from(imgs).forEach(item=>{
			let p = document.createElement('p');
			p.appendChild(item);
			document.body.appendChild(p);
		})
	}

	const showImg = (img)=>{
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}

	Promise.all([
		loadImgs('http://www.imooc.com/static/img/common/logo.png'),
		loadImgs('http://www.imooc.com/static/img/common/logo.png'),
		loadImgs('http://img.mukewang.com/user/54584cb50001e5b302200220-100-100.jpg'),
	]).then((res)=>{
		showImgs(res)
	}).catch((err)=>{
		throw err;
	})

	Promise.race([
		loadImgs('http://www.imooc.com/static/img/common/logo.png'),
		loadImgs('http://www.imooc.com/static/img/common/logo.png'),
		loadImgs('http://img.mukewang.com/user/54584cb50001e5b302200220-100-100.jpg'),
	]).then((res)=>{
		showImg(res)
	}).catch((err)=>{
		console.log(err)
	})
}

