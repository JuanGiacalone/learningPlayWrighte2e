import { test, expect } from '@playwright/test';
import { get, request } from 'http';

const REPO = 'learningPlayWrighte2e';
const USER = 'JuanGiacalone';
const ISSUE = `/repos/${USER}/${REPO}/issues`


test.beforeAll(async ({ request }) => {
    // Create a new repository
    const response = await request.post(`/${USER}/repos`, {
      data: {
        name: REPO
      }
    });
    expect(response.ok()).toBeTruthy();
  });


test('Me fijo si anda el GET', async ({ request }) => {
    const getIssues = await request.get(ISSUE)

    expect(getIssues.ok()).toBeTruthy();
})

test('Puedo crear un bug en el repo', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Bug] Explotó todo',
            body: 'Estamos perdidirijillos!',
        }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Bug] Explotó todo',
        body: 'Estamos perdidirijillos!'
    }));
});

test('Puedo crear un feature request', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Feature] Quiero que haga helados',
            body: 'Estaría buenísimo que el repo haga helados 🍦',
        }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Feature] Quiero que haga helados',
        body: 'Estaría buenísimo que el repo haga helados 🍦'
    }));
});
test('Puedo crear un bug en el repo', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Bug] Explotó todo',
            body: 'Estamos perdidirijillos!',
        }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Bug] Explotó todo',
        body: 'Estamos perdidirijillos!'
    }));
});

test('Puedo crear un feature request', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Feature] Quiero que haga helados',
            body: 'Estaría buenísimo que el repo haga helados 🍦',
        }
    });
    expect(newIssue.ok()).toBeTruthy();

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Feature] Quiero que haga helados',
        body: 'Estaría buenísimo que el repo haga helados 🍦'
    }));
});

test.afterAll(async ({ request }) => {
    // Delete the repository
    const response = await request.delete(`/repos/${USER}/${REPO}`);
    expect(response.ok()).toBeTruthy();
  })

