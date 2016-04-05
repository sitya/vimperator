var INFO = xml`
<plugin name="vimperator-plugin-tweetthis.js"
    version="1.0"
    summary="Share this page on twitter"
    href="http://github.com/sitya/vimperator"
    xmlns="http://vimperator.org/namespaces/liberator">
    <author email="sitya@niif.hu">Tamas Frank</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Vimperator" minVersion="3.3"/>
    <p>Share this page on twitter</p>
    <item>
    <description>
        <p>Share this page on twitter</p>
    </description>
    </item>
</plugin>
`;

(function () {
    var description;

    description = "Share this page on twitter";
    commands.addUserCommand(["tweet"], description, function (comment) {
        var title = content.document.title;
        var url = content.document.location.href;
        var text = comment + " --> " + title + " " + url;
        liberator.open('https://twitter.com/intent/tweet?text=' + encodeURI(text), liberator.NEW_TAB);
    });

})();
