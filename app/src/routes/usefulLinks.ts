import blooket from "$lib/assets/links/blooket-icon-filled-256.png";
import action_bound from '$lib/assets/links/action-bound-icon.png';
import kahoot from '$lib/assets/links/kahoot-icon.jpg';
import baamboozle from '$lib/assets/links/baamboozle-icon.jpg';
import canva from '$lib/assets/links/canva-icon.png';
import padlet from '$lib/assets/links/padlet-icon.png';
import mentimeter from '$lib/assets/links/mentimeter_Branding_Logo_2020_RGB-11.png';
import classroom_screen from '$lib/assets/links/classroomscreen-Logo.png';
import class_tools from '$lib/assets/links/class-tools.png';


type UsefulLinks = [name: string, logo: string, link: string];

export const usefulLinks: UsefulLinks[] = [
    ['Blooket', blooket, 'https://id.blooket.com/'],
    ['Kahoot', kahoot, 'https://kahoot.com/'],
    ['Baamboozle', baamboozle, 'https://www.baamboozle.com/'],
    ['Canva', canva, 'https://www.canva.com/'],
    ['Padlet', padlet, 'https://padlet.com/'],
    ['Mentimeter', mentimeter, 'https://www.mentimeter.com/'],
    ['Classroom Screen', classroom_screen, 'https://classroomscreen.com/ '],
    ['Class Tools', class_tools, 'https://www.classtools.net/'],
    ['Action Bound', action_bound, 'https://www.actionbound.com/'],
]