          page.getByText('banana').click();

          page
            .getByRole('listitem')
            .filter({ hasText: 'banana' }).click();

          page.getByRole('listitem').last();


          await page.getByRole('alert') <alert><\alert>
          await page.getByLabel('correo') <label>correo <input type="email" \> <\label>
          await page.getByPlaceholder('ingrese su pw') <input placeholder='ingrese su pw' type='password'> <\inpute>
          await page.getByAltText('Imagen')  <img alt='imagen' src=...> <\img>
          await page.getByTitle('Numero') <span title='Numero'> 123 <\span>
          await page.getByTestId('b2') <button data-testid='b2'>Boton<\button>
          await page.locator('xpath=botonLoco').click() - Always use relative xpath
          await page.locator('css=botonloco')
          page.getByText('This is a text', { exact: true })

          // In this case there is 2 buttons with the add to cart text. we want to press the playstation
          // So we search on the list for that item and we click the button inside of it.
          await page.getByRole('listitem')  
            .filter({ hasText: 'Playstation 5'})
            .getByRole('button', { name: 'Add to cart'})
            .click()
          // Second way of doing the same thing, more robust, reommended                                        
          await page.getByRole('listitem')
            .filter( {has: page.getByRole( 'heading', { name: 'XBox Series X'})})
            .getByRole('button', { name: 'Add to cart'})

          // Press only the visible button
          await page.locator('button').locator('visible=true').click()

        ////////////////////////////////////////
          <ul> 
          <li>manzana</li>
          <li>banana</li>
          <li>naranja</li>
          </ul>

          page
          .getByRole('listitem')
          .filter({ hasText: 'banana'}).click()

          page.getByRole('listitem').last()
          page.getByRole('listitem').first()
          page.getByRole('listitem').nth(0) / la posicion dee la lista


        //  Tasks
          // test.skip() /skipea el caso
          // test.only() /corre solo ese caso en la suite
          
        // Tags
          // npx playwright test --grep @Sandbox / Corre todos los test que usen el tag Sandbox, se usa con @
          // test('Validando dentro de un popup en @Sandbox', async ({ page, browserName }) =>



          // test('Validando dentro de un popup', async ({ page, browserName }) => {
              test.skip(browserName === 'webkit', 'WebKit does not support popups')
              / Skipea q se corra en Edge cuando entra por parametro el browsername

        // Anottations
          // test.fail()  // Poner esto dentro de un test para forzar el fallo y hace que la falla sea esperada y pase el test.

          // test.fixme()  // Saltea el caso cuando se pone dentro de un test, puede ser usado como test.fixme( test case )

          // Ubicar donde se necesite realmente, si va al inicio, saca screen al inicio
          // test.info().attach('screenshot') , {

            body: await page.screenshot(),
            contentType: 'image/png'

          }

        // CodeGen
          // npx playwright codegen www.google.com  / Abre un navegador con una window para ir grabando un test case
        
        // test.describe.configure({ mode: 'serial' })  // Hace que todo se ejecute en cascada
        // 


