## What is the Currency

This is a simple API that CRUDs the currency of a country.

## Endpoints

| EndPoint                                |   Functionality                      |
| --------------------------------------- | ------------------------------------:|
| POST /currencies/                      | Create a new currency record              |
| GET /currencies/                       | List all the recorded currencies    |
| GET /currencies?page=1&limit=5         | List five currencies from page 1    |
| GET /currencies?currency=US Dollar               | Search for country of the given currency                |
| GET /currencies?country=Kenya             | Search for currency of the given country             |             |
| PUT /currencies/:id                    | Update this currency               |
| DELETE /currencies/:id                 | Delete this single currency        |

## Contributing

1. Fork it! :fork_and_knife:
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git add -A && git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/licenses/MIT) file for details
