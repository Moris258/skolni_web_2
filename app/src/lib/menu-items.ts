// @ts-ignore handled by vite...
import czechia from '$lib/assets/country_flags/czechia.png?w=200';
// @ts-ignore handled by vite...
import lithuania from '$lib/assets/country_flags/lithuania.jpg?w=200';
// @ts-ignore handled by vite...
import italy from '$lib/assets/country_flags/italy.png?w=200';
// @ts-ignore handled by vite...
import romania from '$lib/assets/country_flags/romania.png?w=200';
// @ts-ignore handled by vite...
import portugal from '$lib/assets/country_flags/portugal.jpg?w=200';

type MenuItem = [name: string, logo: string, posts: string, gallery: string];

export const menuItems: MenuItem[] = [
	[
		'Agrupamento de Escolas de Pinheiro Portugal Norte Penafiel',
		portugal,
		'/posts/portugal',
        "/gallery/portugal"
	],
	[   'Liceo Giordano Bruno Italy Piemonte Torin', 
        italy,
        '/posts/italy',
        '/gallery/italy',
    ],
	[   'Gymnázium Josefa Božka, Český Těšín',
        czechia,
        '/posts/czechia',
        "/gallery/czechia"
    ],
	[   'Radviliskio Lizdeikos gimnazija Lithuania Radviliskis', 
        lithuania, 
        '/posts/lithuania',
        "/gallery/lithuania"
    ],
	[
		'Scoala Profesionala Tiberiu Morariu Salva Romania Nord-Vest Salva',
		romania,
		'/posts/romania',
        "/gallery/romania"
	]
];
