const ENV = process.env.NODE_ENV;
let publicUrl:string = '';

if(ENV === 'development'){
	publicUrl = '/';
}else if(ENV === 'production'){
	publicUrl = '/admin-graduation-project';
}

export default publicUrl