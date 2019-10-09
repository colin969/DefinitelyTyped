/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator/tree/patch-1. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator or https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('sheets', 'v4', () => {
        /** now we can use gapi.client.sheets */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** See, edit, create, and delete all of your Google Drive files */
            'https://www.googleapis.com/auth/drive',
            /** View and manage Google Drive files and folders that you have opened or created with this app */
            'https://www.googleapis.com/auth/drive.file',
            /** See and download all your Google Drive files */
            'https://www.googleapis.com/auth/drive.readonly',
            /** See, edit, create, and delete your spreadsheets in Google Drive */
            'https://www.googleapis.com/auth/spreadsheets',
            /** View your Google Spreadsheets */
            'https://www.googleapis.com/auth/spreadsheets.readonly',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /**
         * Applies one or more updates to the spreadsheet.
         *
         * Each request is validated before
         * being applied. If any request is not valid then the entire request will
         * fail and nothing will be applied.
         *
         * Some requests have replies to
         * give you some information about how
         * they are applied. The replies will mirror the requests.  For example,
         * if you applied 4 updates and the 3rd one had a reply, then the
         * response will have 2 empty replies, the actual reply, and another empty
         * reply, in that order.
         *
         * Due to the collaborative nature of spreadsheets, it is not guaranteed that
         * the spreadsheet will reflect exactly your changes after this completes,
         * however it is guaranteed that the updates in the request will be
         * applied together atomically. Your changes may be altered with respect to
         * collaborator changes. If there are no collaborators, the spreadsheet
         * should reflect your changes.
         */
        await gapi.client.sheets.spreadsheets.batchUpdate({
            spreadsheetId: 'spreadsheetId',
        });
        /** Creates a spreadsheet, returning the newly created spreadsheet. */
        await gapi.client.sheets.spreadsheets.create({});
        /**
         * Returns the spreadsheet at the given ID.
         * The caller must specify the spreadsheet ID.
         *
         * By default, data within grids will not be returned.
         * You can include grid data one of two ways:
         *
         * &#42; Specify a field mask listing your desired fields using the `fields` URL
         * parameter in HTTP
         *
         * &#42; Set the includeGridData
         * URL parameter to true.  If a field mask is set, the `includeGridData`
         * parameter is ignored
         *
         * For large spreadsheets, it is recommended to retrieve only the specific
         * fields of the spreadsheet that you want.
         *
         * To retrieve only subsets of the spreadsheet, use the
         * ranges URL parameter.
         * Multiple ranges can be specified.  Limiting the range will
         * return only the portions of the spreadsheet that intersect the requested
         * ranges. Ranges are specified using A1 notation.
         */
        await gapi.client.sheets.spreadsheets.get({
            includeGridData: true,
            ranges: 'ranges',
            spreadsheetId: 'spreadsheetId',
        });
        /**
         * Returns the spreadsheet at the given ID.
         * The caller must specify the spreadsheet ID.
         *
         * This method differs from GetSpreadsheet in that it allows selecting
         * which subsets of spreadsheet data to return by specifying a
         * dataFilters parameter.
         * Multiple DataFilters can be specified.  Specifying one or
         * more data filters will return the portions of the spreadsheet that
         * intersect ranges matched by any of the filters.
         *
         * By default, data within grids will not be returned.
         * You can include grid data one of two ways:
         *
         * &#42; Specify a field mask listing your desired fields using the `fields` URL
         * parameter in HTTP
         *
         * &#42; Set the includeGridData
         * parameter to true.  If a field mask is set, the `includeGridData`
         * parameter is ignored
         *
         * For large spreadsheets, it is recommended to retrieve only the specific
         * fields of the spreadsheet that you want.
         */
        await gapi.client.sheets.spreadsheets.getByDataFilter({
            spreadsheetId: 'spreadsheetId',
        });
    }
});
