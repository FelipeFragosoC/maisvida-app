export class InModel {

	fromObject(obj: Object) {
		for (var propName in obj) {
			this[propName] = obj[propName]
		}
	}

	/**
	 * Encontra um ou vários elementos dentro de um array.
	 * Use TYPE_ARRAY para retornar mais de um valor.
	 *
	 * @param  {Array<any>} array
	 * @param  {string}     prop  Propriedade que será usada para comparar o valor.
	 * @param  {any}        value Propriedade que será usada para encontrar um elemento.
	 * @param  {string}     returnType value | index | object | array
	 * @return any
	 */
	findInArray(array:Array<any>, prop:string, value:any, returnType:string = 'object') {
		let findData:Array<any> = [];

		for (let index = 0; index < array.length; ++index) {
			if(array[index][prop] == value) {

				if(returnType == 'object')
					return array[index];

				findData.push(array[index]);
			}
		}

		if(returnType == 'array')
			return findData;

		return false;
	}
}
