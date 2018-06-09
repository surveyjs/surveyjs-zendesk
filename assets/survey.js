Survey
  .StylesManager
  .applyTheme("default");

client.request('/api/v2/organizations.json').then(
  function (result) {
    if (result.count > 0) {

      var surveyId = result.organizations[0].organization_fields.surveyid;
      if (!!surveyId) {
        var json = {
          surveyId: surveyId
        };
        window.survey = new Survey.Model(json);

        survey
          .onComplete
          .add(function (result) {
            document
              .querySelector('#surveyResult')
              .innerHTML = "result: " + JSON.stringify(result.data);
          });

        $("#surveyElement").Survey({
          model: survey
        });
      }
    }
  },
  function (response) {
    console.error(response.responseText);
  }
);