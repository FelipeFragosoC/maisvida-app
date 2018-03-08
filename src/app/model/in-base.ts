export class InBase {

	public getFormatedDate(datetime:number, down:boolean = false):string {
		let date:Date = new Date(datetime);
		let now:Date = new Date();

		let diff:number = now.getTime() - date.getTime();

		// se for mais que 30 dias
		if(diff/1000/60/60/24 > 30) {
			return this.getDateStr(date.getTime());
		}

		return this.getTimeAgo(diff, down);
	}

	public getDateStr(datetime:number):string {
		let formatedDate:Date = new Date(datetime);

		let day:any = formatedDate.getUTCDate();
		let month:any = formatedDate.getUTCMonth() + 1;
		let year:any = formatedDate.getUTCFullYear();

		if(day < 10) {
			day = '0' + day;
		}

		if(month < 10) {
			month = '0' + month;
		}

		return day + '/' + month + '/' + year;
	}

	public getTimeAgo(value:number, down:boolean = false):string {
		if(value/1000/60 < 1)
			return 'agora mesmo';

		if(value/1000/60 < 60) {
			if(down)
				return Math.floor(value/1000/60) + 'm atrás';

			return Math.round(value/1000/60) + 'm atrás';
		}

		if(value/1000/60/60 < 24) {
			if(down)
				return Math.floor(value/1000/60/60) + 'h atrás';

			return Math.round(value/1000/60/60) + 'h atrás';
		}


		if(down)
			return Math.floor(value/1000/60/60/24) + 'd atrás';

		return Math.round(value/1000/60/60/24) + 'd atrás';
	}

}