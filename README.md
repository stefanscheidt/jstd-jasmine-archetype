jsts-jasmine-archetype
======================

Description
-----------

[Maven](http://maven.apache.org/) [Archetype](http://maven.apache.org/guides/introduction/introduction-to-archetypes.html) for projects using [JsTestDriver](http://code.google.com/p/js-test-driver/) and [Jasmine](https://jasmine.github.io/), including [jasmine-ui](https://github.com/tigbro/jasmine-ui).

Usage
-----

1. Clone the Repository
2. Build and install the archetype via `mvn clean install`
3. Generate a new JsTestDriver-Jasmine-project via `mvn archetype:generate` (see snippet below).
4. Adjust the maven project property `browser` in the generate `pom.xml`

Generate new project:

    mvn archetype:generate -DachetypeCatalog=local -DarchetypeGroupId=com.opitzconsulting.archetypes -DarchetypeArtifactId=jstd-jasmine-archetype -DarchetypeVersion=0.1.0-SNAPSHOT
    
In the generated project, you may

* build the project with `mvn clean install`. This will launch the browser specified via the maven project property `browser`.
* start Jetty via `mvn jetty:run` and then open `http://localhost:8080/${project.artifactId}/UnitSpecRunner.html` or `http://localhost:8080/${project.artifactId}/UiSpecRunner.html`.
* make the shell scripts `jstd-*.sh` executable (`chmod a+x *.sh`) and start JsTestRunner server and the tests suites via these scripts. First start JsTestRunner server via `./jstd-server.sh` and capture at least one browser by opening `http://localhost:9876/capture`. Start unit tests via `./jstd-unit.sh`. To run the UI tests start Jetty via `mvn jetty:run` and the UI tests via `./jstd-ui.sh`.
