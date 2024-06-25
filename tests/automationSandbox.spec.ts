import { test, Browser, Page, expect } from "@playwright/test"
import { SandboxPage } from "./pages/SandboxPage"

const textToWrite: string = 'Text to write there'

test.describe(' Acciones en AutomationSandbox', () => {
    


    test(' Click en Boton ID Dinámico', async ({ page }) => {
        
        await test.step('Navego al site', async () => {
            await page.goto('')
        })

        await test.step(' Click en boton con ID dinámico', async () => {
            const botonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID' })
            await botonIDDinamico.click( { force:true } ) // Sometimes is necesary to force
            await botonIDDinamico.dblclick() // Doble Click
            await botonIDDinamico.click( { button: 'right'}) // Right clicking
            await botonIDDinamico.click( { modifiers: ['Control']})  // Control + Click
            await botonIDDinamico.hover() // hover over

        })
    })

    test('Lleno campo de txt', async ({ page }) => {
        
        await test.step('Navego al site', async () => {
            await page.goto('')
        })

        await test.step('Puedo ingresar textos y hacer enter', async () => {
            await page.getByPlaceholder('Ingresá texto').fill(textToWrite)
            await page.getByPlaceholder('Ingresá texto').pressSequentially(textToWrite)
            await page.getByPlaceholder('Ingresá texto').clear()
            await page.locator('#formBasicText').press('Enter')  // # attribute ID - .Attributeclass 
        })        
  })
    test('Puedo seleccionar y des-seleccionar checkboxes', async ({ page }) => {

        const sandbox = new SandboxPage(page)
        let pastaItem = sandbox.pastaCheckbox

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
            await page.goto('');
        })

        await test.step('Selecciono check Pasta', async () => {

            await pastaItem.check()
            await expect(pastaItem, 'Checkbox no fue checkeado').toBeChecked()
            
        })
        
        await test.step('DesSelecciono check Pasta', async () => {

            await pastaItem.check()
            await pastaItem.uncheck()
            await expect(pastaItem, 'Checkbox esta checkeado').not.toBeChecked()
            
        })
        

    })
    

    test('Puedo seleccionar Radio Buttons', async ({ page }) => {
        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
            await page.goto('');
        })
        await test.step('Puedo seleccionar el Radio Button para No', async () => {
            await page.getByLabel('No').check();
            await expect(page.getByLabel('No'), 'El radio button no se seleccionó').toBeChecked();

        })
    })
    
    test('Puedo seleccionar un item del primer dropdown', async ({ page }) => {
        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
            await page.goto('');
        })
        await test.step('Puedo seleccionar el Radio Button para futbol', async () => {
            await page.getByLabel('Dropdown').selectOption('Fútbol');  

        })
    })    
        test('Puedo seleccionar un item del segundo dropdown', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Puedo seleccionar el Radio Button para No', async () => {
                await page.getByRole('button', { name: 'Día de la semana'} ).click() // Click on the false dropdown
                await page.getByRole('link', {name: 'Martes'} ).click()  // After that, this link is visible
    
            })
        })  
        test('Puedo subir archivos a Automation Sandbox - NO IMPLEMENTADO EN PROD', async ({ page }) => {
            test.skip()

            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Agrego archivos para ser subidos', async () => {
                await page.getByLabel('Upload file').setInputFiles(['pathAlArchivo.pdf', 'Invoice1.pdf', 'Invoice2.pdf']);
                await page.getByLabel('Upload file').setInputFiles([]);

            })

        })
        
        test('Puedo hacer un Drag and Drop de elementos en Automation Sandbox - NO IMPLEMENTADO EN PROD', async ({ page }) => {
            test.skip()

            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Selecciono un día de la semana del dropdown', async () => {
                await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));

            })

        })

        test('Click en Botón ID Dinámico', async ({ page }) => {

            test.info().annotations.push({ type: 'issue', description: 'Este es un ejemplo de anottaions de tipo issue' });

            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })

            await test.step('Puedo hacer click en el botón con ID dinámico', async () => {
                const botonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
                await botonIDDinamico.click({ force: true });
                await expect(page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')).toBeVisible();
            })

        })

        test('Lleno un campo de texto en Automation @Sandbox', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Puedo ingresar texto en el campo Un Aburrido Texto', async () => {
                await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edición').toBeEditable();
                await page.getByPlaceholder('Ingresá texto').fill(textToWrite);
                await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edición').toHaveValue(textToWrite);

            })
        })

        test('Los items del dropdown son los esperados', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Valido que la lista del dropdown contiene los deportes esperados', async () => {
                const deportes = ['Fútbol', 'Tennis', 'Basketball']

                for (let opcion of deportes) {
                    const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);
                    if (element) {
                        console.log(`La opción '${opcion}' está presente.`);
                    } else {
                        throw new Error(`La opción '${opcion}' no está presente.`);
                    }
                }

            })


        })

        test('Valido la columna Nombres de la tabla estática', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })

            await test.step('Puedo validar los elementos para la columna Nombre de la tabla estática', async () => {
                                                                                                            // El nth-child selecciona la segunda columna
                const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)', elements => elements.map(element => element.textContent));
                const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
                // Saca una screen y la adjunta aunque el caso pase.
                await test.info().attach('screenshot', {
                    body: await page.screenshot(),
                    contentType: 'image/png',
                })
                expect(valoresColumnaNombres).toEqual(nombresEsperados);
            })
            
        })

        test('Valido que todos los valores cambian en la tabla dinámica luego de un reload', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })

            await test.step('Valido que los valores cambiaron al hacer un reload a la web', async () => {
                //Creamos un arreglo con todos los valores de la tabla dinámica
                const valoresTablaDinamica = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresTablaDinamica);

                //Hacemos una recarga para que cambien los valores
                await page.reload();

                //Creamos un segundo arreglo con los valores luego de la recarga
                const valoresPostReload = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresPostReload);

                //Validamos que todos los valores cambiaron para cada celda.
                expect(valoresTablaDinamica).not.toEqual(valoresPostReload);

            })


        })

        test('Ejemplo de Soft Assertions', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Valido que todos los elementos de los checkboxes son los correctos', async () => {
                // Se le agrega soft para q continue con el resto de los expect
                await expect.soft(page.getByText('Piza 🍕'), 'No se encontró el elemento Pizza 🍕').toBeVisible();
                await expect.soft(page.getByText('Hamburguesa 🍔'), 'No se encontró el elemento Hamburguesa 🍔').toBeVisible();
                await expect.soft(page.getByText('Pasta 🍝'), 'No se encontró el elemento Pasta 🍝').toBeVisible();
                await expect.soft(page.getByText('Helado 🍧'), 'No se encontró el elemento Helado 🍧').toBeVisible();
                await expect.soft(page.getByText('Torta 🍰'), 'No se encontró el elemento Torta 🍰').toBeVisible();
            })

        })

        test('Validando dentro de un popup', async ({ page, browserName }) => {
            test.skip(browserName === 'webkit', 'WebKit does not support popups')
            await test.step('Dado que navego al sandbox', async () => {
                await page.goto('');
            })

            await test.step('Cuando hago click en el botón popup', async () => {
                await page.getByRole('button', { name: 'Mostrar popup' }).click();
            })

            await test.step('Puedo validar un elemento dentro del popup', async () => {
                await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toHaveText('¿Viste? ¡Apareció un Pop-up!');
                await page.getByRole('button', { name: 'Cerrar' }).click();

            })
            // Otro forma de validar pop ups
            // const popupPromise = page.waitForEvent('popup')
            // await page.getByText('open the popup').click()
            // const popup = await popupPromise
            // await popup.waitForLoadState()
            // console.log(await popup.title())

        })
    
})

