import { test, expect} from "@playwright/test"

test('Hace un mock de una fruta q no esta en la API real', async ({ page }) => {
    
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{ name: 'Melocotón', id: 26 }];
        await route.fulfill({ json });
    });

    await page.goto('https://demo.playwright.dev/api-mocking')
    await expect(page.getByText('Melocotón')).toBeVisible()

})

test('Obtengo la respuesta real y le agrego algo no tan real', async ({ page }) => {
    // Obtenemos la respuesta y le agregamos un extra
    await page.route('*/**/api/v1/fruits', async route => {
        // Cuando ocurre la llamda a la ruta, guardo en response. Uso fetch para eso
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'Lionel Messi', id: 200 });
        // Obtenemos la respuesta real mientras que le agregamos un extra
        // al objeto JSON que va a estar siendo representado.
        await route.fulfill({ response, json });
    });

    // Vamos a la página
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Validamos que vino la respuesta real con el extra que le sumamos antes
    await expect(page.getByText('Lionel Messi', { exact: true })).toBeVisible();
});
