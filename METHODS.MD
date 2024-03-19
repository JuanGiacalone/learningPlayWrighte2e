          page.getByText('banana').click();

          page
            .getByRole('listitem')
            .filter({ hasText: 'banana' }).click();

          page.getByRole('listitem').last();


          