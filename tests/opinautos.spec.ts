import { test, expect } from '@playwright/test';

test.describe('OpinAutos - Home', () => {
  test('CT01 - deve exibir o título principal e o texto de busca', async ({ page }) => {
    // Arrange
    const titulo = page.getByText('Milhares de pessoas com o mesmo carro');
    const textoBusca = page.getByText('Procurar por marca e modelo');

    // Act
    await page.goto('https://www.opinautos.com.br/br/');

    // Assert
    await expect(titulo).toBeVisible();
    await expect(textoBusca).toBeVisible();
  });

  test('CT02 - deve ir para a escolha de modelo ao clicar na Chevrolet', async ({ page }) => {
    // Arrange
    await page.goto('https://www.opinautos.com.br/br/');
    const marcaChevrolet = page.getByRole('link', { name: /chevrolet/i }).first();

    // Act
    await marcaChevrolet.click();

    // Assert
    await expect(page).toHaveURL(/\/br\/chevrolet\/escolhermodelo/);
  });

  test('CT03 - deve abrir a lista de marcas ao clicar em "Ver mais marcas"', async ({ page }) => {
    // Arrange
    await page.goto('https://www.opinautos.com.br/br/');
    const verMaisMarcas = page.getByRole('link', { name: /ver mais marcas/i });

    // Act
    await verMaisMarcas.click();

    // Assert
    await expect(page).toHaveURL(/\/br\/escolhermarca/);
  });
});