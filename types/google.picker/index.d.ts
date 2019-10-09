// Type definitions for Google Picker API
// Project: https://developers.google.com/picker/
// Definitions by: grapswiz <https://github.com/grapswiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace google {
    namespace picker {
        export class PickerBuilder {
            constructor();

            // Add a View to the navigation pane.
            addView(viewOrId: any): PickerBuilder;

            // Add a ViewGroup to the top-level navigation pane.
            addViewGroup(viewGroup: any): PickerBuilder;

            // Disable a picker feature.
            disableFeature(feature: string): PickerBuilder;

            // Enable a picker feature.
            enableFeature(feature: string): PickerBuilder;

            // Get the relay URL, used for gadgets.rpc.
            getRelayUrl(): string;

            // Get the dialog title.
            getTitle(): string;

            // Disable the title bar from being shown. To re-enable, call setTitle with a non-empty title or undefined.
            hideTitleBar(): PickerBuilder;

            // Check if a picker Feature is enabled.
            isFeatureEnabled(feature: string): boolean;

            // Sets the Google Drive App ID needed to allow application to access the user's files via the Google Drive API.
            setAppId(appId: string): PickerBuilder;

            // Set the callback method called when the user picks and item (or items), or cancels. The callback method receives a single callback object. The structure of the callback object is described in the JSON Guide.
            setCallback(method: Function): PickerBuilder;

            // Sets the Browser API key obtained from Google Developers Console. See the Developer's Guide for details on how to obtain the Browser API key.
            setDeveloperKey(key: string): PickerBuilder;

            // Set the document.
            setDocument(document: string): PickerBuilder;

            // ISO 639 language code. If the language is not supported, en-US is used. This method provides an alternative to setting the locale at google.load() time. See the Developer's Guide for a list of supported locales.
            setLocale(locale: string): PickerBuilder;

            // Sets the maximum number of items a user can pick.
            setMaxItems(max: number): PickerBuilder;

            // Sets an OAuth token to use for authenticating the current user. Depending on the scope of the token, only certain views will display data. Valid scopes are Google Docs, Drive, Photos, YouTube.
            setOAuthToken(token: string): PickerBuilder;

            // Sets the origin of picker dialog. The origin should be set to the window.location.protocol + '//' + window.location.host of the top-most page, if your application is running in an iframe.
            setOrigin(origin: string): PickerBuilder;

            // Set the relay URL, used for gadgets.rpc.
            setRelayUrl(url: string): PickerBuilder;

            // Set the list of MIME types which will be selectable. Use commas to separate MIME types if more than one is required.
            setSelectableMimeTypes(type: string): PickerBuilder;

            // Set the preferred dialog size. The dialog will be auto-centered. It has a minimum size of (566,350) and a maximum size of (1051,650).
            setSize(width: number, height: number): PickerBuilder;

            // Set the dialog title.
            setTitle(title: string): PickerBuilder;

            // Specify an album ID for photo uploads. See Picasa Web Albums Data API documentation for more information about albums.
            setUploadToAlbumId(albumId: string): PickerBuilder;

            // Returns the URI generated by this builder.
            toUri(): string;

            // Construct the Picker object. The Picker object is returned.
            build(): Picker;
        }

        /**
         * Picker is the top level object representing the UI action with the user. These objects are not created directly, but instead use the PickerBuilder object.
         */
        export interface Picker {
            isVisible(): boolean;
            setCallback(method: Function): Picker;
            setRelayUrl(url: string): Picker;
            setVisible(visible: boolean): Picker;
            dispose(): void;
        }

        /**
         * Use DocsUploadView to upload documents to Google Drive.
         */
        export class DocsUploadView {
            constructor();

            // Allows the user to select a folder in Google Drive to upload to.
            setIncludeFolders(included: boolean): DocsUploadView;

            // Sets the upload destination to the specified folder. This overrides ".setIncludeFolders" to false.
            setParent(parentId: string): DocsUploadView;
        }

        /**
         * DocsView is a subclass of View that can be used for Google Drive views.
         */
        export class DocsView {
            // Constructor. The ViewId must be one of the Google Drive views. Default is ViewId.DOCS.
            constructor(viewId?: string);

            // Show folders in the view items.
            setIncludeFolders(included: boolean): DocsView;

            // Allows the user to select a folder in Google Drive.
            setSelectFolderEnabled(enabled: boolean): DocsView;

            // Selects which mode the view will use to display the documents.
            setMode(mode: string): DocsView;

            // Filters the documents based on whether they are owned by the user, or shared with the user.
            setOwnedByMe(me?: boolean): DocsView;

            // Sets the initial parent folder to display.
            setParent(parentId: string): DocsView;

            // Filters the documents based on whether they are starred by the user.
            setStarred(starred: boolean): DocsView;

            // Allows the user to select folders from Team Drives.
            setEnableTeamDrives(enabled: boolean): DocsView;

            // Set the MIME types which will be included in the view. Use commas to separate MIME types if more than one is required.
            setMimeTypes(mimeTypes: string): DocsView;
        }

        /**
         * DocsViewMode is an enumerated type for displaying data within a DocsView. Use these values in calls to DocsView.setMode.
         */
        export var DocsViewMode: {
            // Display documents in a thumbnail grid.
            GRID: string;
            // Display documents in a detailed list.
            LIST: string;
        };

        export var Feature: {
            // Show only documents owned by the user when showing items from Google Drive.
            MINE_ONLY: string;

            // Allow user to choose more than one item.
            MULTISELECT_ENABLED: string;

            // Hide the navigation pane. If the navigation pane is hidden, users can only select from the first view chosen.
            NAV_HIDDEN: string;

            // For photo uploads, controls whether per-photo selection (as opposed to per-album) selection is enabled.
            SIMPLE_UPLOAD_ENABLED: string;

            // Whether Team Drive items should be included in results.
            SUPPORT_TEAM_DRIVES: string;
        };

        export var ViewId: {
            DOCS: string;
            DOCS_IMAGES: string;
            DOCS_IMAGES_AND_VIDEOS: string;
            DOCS_VIDEOS: string;
            DOCUMENTS: string;
            DRAWINGS: string;
            FOLDERS: string;
            FORMS: string;
            IMAGE_SEARCH: string;
            MAPS: string;
            PDFS: string;
            PHOTOS: string;
            PHOTO_ALBUMS: string;
            PHOTO_UPLOAD: string;
            PRESENTATIONS: string;
            RECENTLY_PICKED: string;
            SPREADSHEETS: string;
            VIDEO_SEARCH: string;
            WEBCAM: string;
            YOUTUBE: string;
        };

        export var Action: {
            CANCEL: string;
            PICKED: string;
        };

        /**
         * Document is an enumerated type used to convey information about a specific picked item. Only fields which are relevant to the selected item are returned. This value will be in the Response.DOCUMENTS field in the callback data.
         */
        export var Document: {
            ADDRESS_LINES: string;
            AUDIENCE: string;
            DESCRIPTION: string;
            DURATION: string;
            EMBEDDABLE_URL: string;
            ICON_URL: string;
            ID: string;
            IS_NEW: string;
            LAST_EDITED_UTC: string;
            LATITUDE: string;
            LONGITUDE: string;
            MIME_TYPE: string;
            NAME: string;
            NUM_CHILDREN: string;
            PARENT_ID: string;
            PHONE_NUMBERS: string;
            SERVICE_ID: string;
            THUMBNAILS: string;
            TYPE: string;
            URL: string;
        };

        /**
         * Response is an enumerated type used to convey information about the user's picked items.
         */
        export var Response: {
            ACTION: string;
            DOCUMENTS: string;
            PARENTS: string;
            VIEW: string;
        };

        export var Type: {
            ALBUM: string;
            DOCUMENT: string;
            LOCATION: string;
            PHOTO: string;
            URL: string;
            VIDEO: string;
        };
    }
}
