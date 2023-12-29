/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  content: [],
  theme: {
    extend: {
      backgroundImage:{
        'tBlue': "url(/assets/rulet1.svg)",
        'tBrown': "url(/assets/rulet2.svg)",
        'tYellow': "url(/assets/rulet3.svg)",
        'pin': "url(/assets/roulette-pin.svg)",
        'nightwish': "url(/assets/inventory/ak-47-nightwish(red).png)",
        'wildfire': "url(/assets/inventory/awp-wildfire(red).png)",
        'elite': "url(/assets/inventory/dual-berettas-elite-1.6(blue).png)",
        'melondrama': "url(/assets/inventory/dual-berettas-melondrama(pink).png)",
        'commemoration': "url(/assets/inventory/famas-commemoration(red).png)",
        'ensnared': "url(/assets/inventory/mac-10-ensnared(blue).png)",
        'foresight': "url(/assets/inventory/mag-7-foresight(blue).png)",
        'popdog': "url(/assets/inventory/mag-7-popdog(blue).png)",
        'agent': "url(/assets/inventory/mp5-sd-agent(purple).png)",
        'necro': "url(/assets/inventory/mp5-sd-necro-jr.(blue).png)",
        'abyssal': "url(/assets/inventory/mp7-abyssal-apparition(pink).png)",
        'hydra': "url(/assets/inventory/mp9-hydra(purple).png)",
      }
    },
  },
  plugins: [],
}

