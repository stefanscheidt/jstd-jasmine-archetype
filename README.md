jsts-jasmine-archetype
======================

Description
-----------

[Maven](http://maven.apache.org/) [Archetype](http://maven.apache.org/guides/introduction/introduction-to-archetypes.html) for projects using [JsTestDriver](http://code.google.com/p/js-test-driver/) and [Jasmine](http://pivotal.github.com/jasmine/), including [jasmine-ui](https://github.com/tigbro/jasmine-ui).

Usage
-----

1. Clone the Repository
2. Build and install the archetype via `mvn clean install`
3. Generate a new JsTestDriver-Jasmine-project via `mvn archetype:generate`

Generate new project:

    mvn archetype:generate -DachetypeCatalog=local -DarchetypeGroupId=com.opitzconsulting.archetypes -DarchetypeArtifactId=jstd-jasmine-archetype -DarchetypeVersion=0.1.0-SNAPSHOT
