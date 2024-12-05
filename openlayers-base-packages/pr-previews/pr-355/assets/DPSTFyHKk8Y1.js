const e=JSON.parse(`{"showcase-app":{"header.title":"Component Showcase","ariaLabels.map":"Map. Use the arrow keys to move the map. Zoom in with the plus button and zoom out with the minus button.","demos.geolocation.title":"Geolocation","demos.geolocation.description":"This demo shows how to use the <code>Geolocation</code> tool to get the current position of the device.","demos.printing.title":"Printing","demos.printing.description":"This demo shows how to use the <code>Printing</code> component to export a screenshot of the map.","demos.spatialBookmarks.title":"Spatial Bookmarks","demos.spatialBookmarks.description":"This demo shows how to use the <code>SpatialBookmarks</code> component to save und load spatial bookmarks.","demos.overviewMap.title":"Overview map","demos.overviewMap.description":"This demo shows how to use the <code>OverviewMap</code>.","demos.mapNavigation.title":"Map navigation tools","demos.mapNavigation.description":"This demo shows how to use the map navigation tools: <code>ZoomIn, ZoomOut, InitialExtent</code>","demos.searchAndHighlight.title":"Search and Feature-Highlight","demos.searchAndHighlight.description":"This demo shows how to use the <code>Search</code> component and how features can be highlighted in the map.","demos.coordinateViewer.title":"Coordinate viewer","demos.coordinateViewer.description":"This demo shows how to use the <code>CoordinateViewer</code> component to show the coordinates at the users current mouse position.","demos.coordinateInput.title":"Coordinate input","demos.coordinateInput.description":"This demo shows how to use the <code>CoordinateInput</code> component to allow users to enter coordinates. The validation checks if the input is a valid coordinate for the selected projection.","demos.coordinateInput.cleared":"Input field cleared","demos.coordinateInput.entered":"Coordinate entered: {coordinates} in {projection}","demos.coordinateInput.placeholder":"Enter coordinate here","demos.coordinateInput.setInput":"Set input value","demos.coordinateSearch.title":"Coordinate search","demos.coordinateSearch.description":"This demo shows how to use the <code>CoordinateSearch</code> component to show the coordinates at the users current mouse position and to search for coordinates. It is possible to switch between different projections.","demos.coordinateSearch.cleared":"Input field cleared","demos.coordinateSearch.entered":"Coordinate entered: {coordinates} in {projection}","demos.scaleViewer.title":"Scale viewer","demos.scaleViewer.description":"This demo shows how to use the <code>ScaleViewer</code> component.","demos.scaleSetter.title":"Scale setter","demos.scaleSetter.description":"This demo shows how to use the <code>ScaleSetter</code> component to change the scale of the map.","demos.scaleBar.title":"Scale bar","demos.scaleBar.description":"This demo shows how to use the <code>ScaleBar</code> component.","demos.measurement.title":"Measurement","demos.measurement.description":"This demo shows how to use the <code>Measurement</code> component for measuring distances and areas. <code>Measurement</code> component for measuring distances and areas.","demos.tocLegend.title":"Toc, BasemapSwitcher and Legend","demos.tocLegend.description":"This demo shows how to use the <code>Toc</code>, <code>BasemapSwitcher</code> and <code>Legend</code> components to control the map content and to show the legend for the contents.","demos.tocLegend.tocTitle":"TOC","demos.tocLegend.legendTitle":"Legend","demos.selectionResultList.title":"Selection and Result List","demos.selectionResultList.description":"This demo shows how to use the <code>Selection</code> component to select feature in the map and how to use the <code>ResultList</code> component to display feature attributes in a table.","demos.editing.title":"Editing","demos.editing.description":"This demo shows how the API of the <code>editing</code> package can be used to provide editing functionality.","demos.editing.startCreateButton":"create feature","demos.editing.startUpdateButton":"update feature","demos.editing.stopButton":"stop editing","demos.editing.create.startTitle":"Editing - Create new feature","demos.editing.create.featureCreated":"Created feature with ID: {featureId}","demos.editing.update.startTitle":"Editing - Modify feature","demos.editing.update.featureModified":"Modified feature with ID: {featureId}","demos.editing.update.tooltip.select":"Select geometry to start editing","demos.editing.update.savingStared":"Feature is being saved...","demos.editing.activeInfo":"Status: editing active","demos.editing.inactiveInfo":"Status: editing inactive","demoSelection.label":"Demo:","demoSelection.notFound":"Demo ''{demoId}'' was not found.","localeSwitcher.label":"Language:","localeSwitcher.locale.de":"German","localeSwitcher.locale.en":"English"},"@open-pioneer/coordinate-search":{"coordinateInput.ariaLabel":"Coordinate input","coordinateInput.copyPlaceholder":"Copy","coordinateInput.clearPlaceholder":"Clear","tooltip.basic":"Invalid input","tooltip.space":"Invalid input: Please enter the coordinates seperated by a space.","tooltip.spaceOne":"Invalid input: Please use exactly one space to separate the coordinates.","tooltip.2coords":"Invalid input: Please enter two numbers.","tooltip.dividerEn":"Invalid input: Please use '.' only as decimal separator.","tooltip.extent":"The coordinates are not in the bounds of the reference system. Please change the projection or coordinates.","tooltip.projection":"The projection is not working. Please change to another projection.","selected":"selected"},"@open-pioneer/editing":{"title":"Editing","create.tooltip.begin":"Click to start creating the geometry","create.tooltip.continue":"Double click to finish the geometry and save the feature","create.tooltip.deselect":"Click outside the geometry in the map to save changes"},"@open-pioneer/geolocation":{"locateNotSupported":"Geolocation is not supported.","locateMeStart":"Start geolocation","locateMeEnd":"Stop geolocation","error":"Error","permissionDenied":"Geolocation was canceled.","positionUnavailable":"Geolocation position cannot be determined.","timeout":"Geolocation was canceled due to timeout.","unknownError":"An unexpected error occurred during geolocation."},"@open-pioneer/legend":{"altLabel":"legend image for layer {layerName}","fallbackLabel":"legend not available","basemapLabel":"Basemap"},"@open-pioneer/map-navigation":{"initial-extent.title":"Zoom to initial extent","zoom-in.title":"Zoom in map","zoom-out.title":"Zoom out map","view-backward.title":"One map view back","view-forward.title":"One map view ahead"},"@open-pioneer/measurement":{"measurementLabel":"Mode","distance":"Distance","area":"Area","deleteMeasurementLabel":"Delete measurements","measurementInfoText":"Click in the map to start a measurement.","tooltips.help":"Click to start measuring.","tooltips.continue":"Double click to end the measurement."},"@open-pioneer/printing":{"title":"Title","fileFormat":"File format","export":"Export map","input.placeholder":"Enter title","printingMap":"Map is printing ...","printingFailed":"Failed to print the map."},"@open-pioneer/result-list":{"selectAllTooltip":"Select all","deSelectAllTooltip":"Deselect all","noDataMessage":"No data available","displayBoolean.true":"yes","displayBoolean.false":"no","ariaLabel.selectSingle":"Press space to select or deselect."},"@open-pioneer/scale-setter":{"button.ariaLabel":"Current scale: {scale}.","button.ariaDescription":"Press Enter to change the scale."},"@open-pioneer/search":{"noOptionsText":"No results found","loadingText":"Loading...","searchPlaceholder":"Search...","ariaLabel.search":"Search bar","ariaLabel.instructions":"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.","ariaLabel.searchFocus":"focused","ariaLabel.searchSelect":"selected","ariaLabel.searchClear":"cleared","ariaLabel.clearButton":"Empty the search"},"@open-pioneer/selection":{"selectMethod":"Select method","EXTENT":"Rechteck","POLYGON":"Polygon","FREEPOLYGON":"Freies Zeichnen","CIRCLE":"Kreis","selectSource":"Select source","tooltip":"Click on the map, hold down the mouse button and draw a rectangle","disabledTooltip":"The current selection source is not available","noSourceTooltip":"No selection source selected. Please choose a selection source to start.","sourceNotAvailable":"Source not available","selectionFailed":"Spatial selection failed","selectionPlaceholder":"No source selected","layerNotVisibleReason":"Matching layer is not visible.","selected":"selected"},"@open-pioneer/spatial-bookmarks":{"bookmark.button.create":"Add new bookmark","bookmark.button.deleteAll":"Delete all bookmarks","bookmark.button.deleteOne":"Delete bookmark","bookmark.button.save":"Save","bookmark.button.cancel":"Cancel","bookmark.button.cancelDelete":"No","bookmark.button.confirmDelete":"Yes","bookmark.input.label":"Name","bookmark.input.placeholder":"Enter bookmark name","bookmark.alert.create":"After entering a name you can save the new bookmark. The current map extent is used as the basis for the position.","bookmark.alert.delete":"Do you really want to delete all spatial bookmarks?","bookmark.alert.noSaved":"No bookmarks saved","bookmark.list.label":"Spatial bookmarks"},"@open-pioneer/toc":{"basemapsLabel":"Basemaps","descriptionLabel":"Layer description","operationalLayerLabel":"Operational layers","childgroupLabel":"Layer group {title}","missingLayers":"There are no layers to display.","error":"Error while creating map content.","layerNotAvailable":"Layer not available","toolsLabel":"Map tools","tools.hideAllLayers":"Hide all layers"},"@open-pioneer/basemap-switcher":{"emptyBasemapLabel":"Without basemap","layerNotAvailable":"Layer not available","selected":"selected"}}`);export{e as default};
