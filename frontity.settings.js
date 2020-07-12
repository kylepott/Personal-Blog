const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Technical Again",
      "description": '"You must begin where you are and with what you are." - Russell Conwell '    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            
            [
              "Project List",
              "/what-are-we-doing-here/ground-rules/project-list/"
            ],
            [
              "On Learning",
              "/what-are-we-doing-here/ground-rules/"
            ],
            [
              "Life Philosopihes",
              "/other-life-philosophies/"
            ],
            
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://technicalagain.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
