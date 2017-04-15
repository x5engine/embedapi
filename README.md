*Vulcan version* with EmbedAPI.com alternative for Embedly package, used internally. 

Works fine you just need to sign up at EmbedAPI.com and request an api key

Then add it to your settings.json file embedAPIKey:"YOU API KEY"

That's and enjoy your day :)

More version for older Telescope version will be added in other branches....


Note: if you are having issue displaying your thumbnails So instead of using `<Components.PostsThumbnail post={post}/>` just use
```
<a className="posts-thumbnail" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      <span><img src={post.thumbnailUrl} /></span>
    </a>
```  
If you need help or find any bugs contact us :)
