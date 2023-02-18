module.exports = {
	async afterCreate(event) {
		const {result} = event;

		try{
			await strapi.plugins['email'].services.email.send({
				to: 'inzemamhaq05@gmail.com',
				from: 'mailgun@sandbox4a8df07cb32743ae9edfd25f07098fe1.mailgun.org',
				subject: 'A new order is placed',
				text: `the name is: ${result.name}`
			})
		} catch(err){
			console.log(err);
		}
	}
}
