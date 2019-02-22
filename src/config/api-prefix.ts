const ENV = process.env.NODE_ENV;
let apiPrefix:string = '';

if(ENV === 'development'){
	apiPrefix = '//localhost:3000';
}else if(ENV === 'production'){
	apiPrefix = '//xiedaimala.com';
}

export default apiPrefix