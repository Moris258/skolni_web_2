import ebspinheiro from '$lib/assets/schools/ebspinheiro.png';
import gbruno from '$lib/assets/schools/gbruno.png';
import gmct from '$lib/assets/schools/gmct.png';
import lizdeika from '$lib/assets/schools/lizdeika.png';
import scoalasalva from '$lib/assets/schools/scoalasalva.jpg';

type Schools = [name: string, logo: string, website: string][];

export const schools: Schools = [
	[
		'Agrupamento de Escolas de Pinheiro Portugal Norte Penafiel',
		ebspinheiro,
		'https://www.ebspinheiro.net/'
	],
	['Liceo Giordano Bruno Italy Piemonte Torin', gbruno, 'https://www.gbruno.edu.it'],
	['Gymnázium Josefa Božka, Český Těšín', gmct, 'https://www.gmct.cz'],
	['Radviliskio Lizdeikos gimnazija Lithuania Radviliskis', lizdeika, 'http://www.lizdeika.lt/'],
	[
		'Scoala Profesionala Tiberiu Morariu Salva Romania Nord-Vest Salva',
		scoalasalva,
		'https://www.scoalasalva.ro/'
	]
];
