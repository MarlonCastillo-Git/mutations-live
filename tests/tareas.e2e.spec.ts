import { test, expect } from '@playwright/test'

test('Usuario crea un tarea nueva exitosamente', async ({ page }) => {
    await page.goto('http://localhost:3000/tareas')

    await page.fill('input[name="titulo"]', 'Asistir al Oktoberfest')
    await page.fill('input[name="descripcion"]', 'fecha 29 de octubre')
    await page.selectOption('select[name="prioridad"]', 'alta')
    await page.click('button[type="submit"]')

    await expect(page.getByText('Asistir al Oktoberfest')).toBeVisible()
})