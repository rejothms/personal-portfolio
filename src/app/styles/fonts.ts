import { Inter, Lora, Source_Sans_3,Roboto, Gupter,Oswald } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts
const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight:['400', '700'] })
const gupter = Gupter({ subsets: ['latin'], weight:['400', '700'] })
const oswald = Oswald({ subsets: ['latin'], weight:['400'] })
// define 2 weights of a non-variable font
//const sourceCodePro400 = Source_Sans_3({ weight: '400' })
//const sourceCodePro700 = Source_Sans_3({ weight: '700' })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
//const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })
 
export { inter, lora, roboto, gupter,oswald }