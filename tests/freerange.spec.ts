import { test, Browser, Page, expect } from '@playwright/test';


  test.describe('Navegación en www.freerangetesters.com', () => {

    const secciones = [
      { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
      { nombre: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy' },
      { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
      { nombre: 'Blog', url: '/blog', tituloEsperado: 'Free Range Testers' }
      // Agrega más secciones si es necesario
    ]
    for (const seccion of secciones) {
      test(`Validar redirección a la sección "${seccion.nombre}"`, async ({ page }) => {
        await test.step(`Estando yo en la web principal www.freerangetesters.com`, async () => {
          page.goto('https://www.freerangetesters.com');
          await expect(page).toHaveTitle('Free Range Testers')
        })

        await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
          page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
          await page.waitForURL(`**${seccion.url}`)
          

        })

        await test.step(`Soy redirigido a la sección de título "${seccion.tituloEsperado}"`, async () => {
          await expect(page).toHaveTitle(seccion.tituloEsperado)
          
          
        })
      })
    }
  }) 
  
  /*
          await page.getByRole('alert') <alert><\alert>
          await page.getByLabel('correo') <label>correo <input type="email" \> <\label>
          await page.getByPlaceholder('ingrese su pw') <input placeholder='ingrese su pw' type='text'> <\inpute>
          await page.getByAltText('Imagen')  <img alt='imagen' src=...> <\img>
          await page.getByTitle('Numero') <span title='Numero'> 123 <\span>
          await page.getByTestId('b2') <button data-testid='b2'>Boton<\button>
          await page.locator('xpath=botonLoco').click() - Usar siempre xpath relativo - No se recomienda
          await page.locator('css=botonloco')
        
  
  */
