import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import BigQuote from '../components/BigQuote'

const Uses = ({ title, description }) => (
    <Layout pageTitle={title} description={description}>
        <PageHeader>Uses</PageHeader>
        <article className="prose lg:prose-xl mb-16 text-black dark:text-gray-300">
            <p>Inspired by <a href="https://wesbos.com/uses/" target="_blank" rel="nofollow noreferrer">Wes Bos</a>, this page details the things I use to stay productive. Let's dive in.</p>

            <h2 className="font-semibold text-2xl text-black dark:text-gray-100">Editor &amp; Terminal</h2>

            <div className="relative text-blue-600 dark:text-blue-400 text-lg md:text-xl ml-2 md:ml-4">
                <BigQuote />
                <p className="mb-2 font-slab text-2xl">Time is a huge factor in staying productive. Your editor is the one tool you spend most of yours in and you should invest in optimizing your workflow skills. You'll benefit from them every day.</p>
                <div className="text-right -mt-4 font-slab text-2xl">- <a href="https://twitter.com/addyosmani" className="default-link" target="_blank" rel="nofollow noreferrer">Addy Osmani</a></div>
            </div>

            <ul>
                <li>
                    <p className="mb-0">
                        <strong className="text-black dark:text-gray-200">
                            <a href="https://code.visualstudio.com" target="_blank" rel="nofollow noreferrer">VS Code</a>
                        </strong>
                    </p>
                    <p>
                        I am probably one of the last people to make the switch to VS Code. I'll probably do a write-up on why I switched, because it took a lot for me to leave Atom. For now, I'm really enjoying VS Code.
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="text-black dark:text-gray-200">
                            <a href="https://marketplace.visualstudio.com/items?itemName=mikemcbride.electron-highlighter" target="_blank" rel="noreferrer nofollow">Electron Highlighter Syntax</a>
                        </strong>
                    </p>
                    <p>
                        I wrote my own theme. It's a slightly more vibrant version of Atom's One Dark syntax theme that I've customized to my liking. I have spent way more time on this theme than I care to admit.
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="text-black dark:text-gray-200">
                            <a href="https://monolisa.dev" target="_blank" rel="nofollow noreferrer">MonoLisa</a>
                        </strong>
                    </p>
                    <p>
                        I have used a number of fonts over the years. MonoLisa is what I currently use in my editor and terminal (and also on this website). It's highly readable and looks excellent. If I have to stare at a font all day, it's worth paying for one I enjoy looking at.
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="text-black dark:text-gray-200">
                            <a href="https://iterm2.com/" target="_blank" rel="nofollow noreferrer">iTerm 2</a>
                        </strong>
                    </p>
                    <p>
                        I use iTerm for a terminal. It's got a lot more features than the default macOS terminal, it's fast, and it looks great. I used <a href="https://hyper.is/" target="_blank" rel="nofollow noreferrer">Hyper</a> for a long time but would occasionally run into weird issues, and development has slowed considerably on that app so I'm back to iTerm. It's stable and works great.
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="text-black dark:text-gray-200">
                            <a href="https://fishshell.com" target="_blank" rel="nofollow noreferrer">fish</a>
                        </strong>
                    </p>
                    <p>
                        Fish is my shell. Much better than bash in my opinion. I used zsh for years (both oh-my-zsh and prezto) and fish is a much more enjoyable experience. The intelligent autocomplete has changed my life. It's amazing. Also super easy to customize. It used to have a lot of incompatibilities with bash scripts which was annoying because you couldn't copy them and run them, but many of these things have been made compatible so it's much better than it used to be.
                    </p>
                </li>
            </ul>

            <p>Here are a few of my favorite aliases I've set up:</p>

            <ul>
                <li>
                    <p><code>afk</code> starts my screensaver</p>
                </li>
                <li>
                    <p><code>bitly</code> followed by a URL runs a Python script to get the shortened link and copies it to my clipboard. Mostly useful for <a href="https://en.wikipedia.org/wiki/Rickrolling" target="_blank" rel="nofollow noreferrer">Rickrolling</a> people.</p>
                </li>
                <li>
                    <p><code>weather</code> gets the current weather in your area - try it out! Run <code>curl wttr.in</code> in your own terminal.</p>
                </li>
                <li>
                    <p><code>please</code> = <code>sudo</code>. Stole this idea from <a href="https://github.com/paulirish/dotfiles" target="_blank" rel="noreferrer nofollow">Paul Irish</a>, but I can't seem to find it in his dotfiles anymore.</p>
                </li>
                <li>
                    <p><code>resource</code> re-sources my shell if I've made changes</p>
                </li>
                <li>
                    <p><code>rm</code> = <code>trash</code>. I installed <a href="https://github.com/sindresorhus/trash-cli" target="_blank" rel="nofollow noreferrer">trash-cli</a>, so setting <code>rm</code> equal to <code>trash</code> means instead of losing something forever when I run <code>rm</code>, it dumps it into my trash so I can still recover it if I need to. I've been burned too many times.</p>
                </li>
                <li>
                    <p><code>gpub</code> = <code>git push -u origin $(git_current_branch)</code>. When you start a new branch in git, it's super annoying to have to set the upstream origin the first time you're pushing that branch. This alias makes it easy to publish a new branch.</p>
                </li>
            </ul>

            <h2 className="font-semibold text-2xl text-black dark:text-gray-100">Desktop Apps</h2>

            <p>I use a variety of other desktop applications to get things done. I'll elaborate a little on why I chose some of them, especially in lieu of other popular applications. If you can install the app via <a href="https://formulae.brew.sh/cask" target="_blank" rel="noreferrer nofollow">Homebrew</a> I will include the install command.</p>

            <ul>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">Firefox, Brave</strong>
                    </p>
                    <p>
                        I go back and forth between these, but mostly use Firefox. I am a big fan of the open web. Mozilla (Firefox) and Brave Software are some of the few companies that still seems like advocates for that. Both browsers respect your privacy and have excellent built-in ad and tracker blocking, so unlike Google Chrome, your browser isn't sending data on everything you do back to Google, who then sells your data for advertising. <code>brew install firefox</code> and <code>brew install brave-browser</code>
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">Kap</strong>
                    </p>
                    <p>
                        Kap is the best app I've found for doing screen captures. You can easily export them to MP4 or GIF. Super useful for showing UI changes in GitHub PRs. [<a href="https://ketcap.co" target="_blank" rel="noreferrer nofollow">website</a>, <a href="https://getkap.co/download" target="_blank" rel="nofollow noreferrer">download</a>] <code>brew install kap</code>
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">Rectangle</strong>
                    </p>
                    <p>
                        This might be the most underrated app ever. Rectangle gives you keyboard shortcuts for rearranging and resizing your windows, and also gives you "window snapping", where if you drag a window to a certain edge of the screen it will snap to fill part of the screen. I will never be able to use a Mac without this app again. [<a href="https://rectangleapp.com/" target="_blank" rel="nofollow noreferrer">website</a>] <code>brew install rectangle</code>
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">Insomnia</strong>
                    </p>
                    <p>
                        A REST client, used for testing API calls. I previously used Postman for a REST client, but I came across Insomnia and it's really great. It also has excellent GraphQL support. <code>brew install insomnia</code>
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">MongoDB Compass</strong>
                    </p>
                    <p>
                        A really solid desktop GUI for interacting with Mongo.
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">Table Plus</strong>
                    </p>
                    <p>
                        An app for interacting with pretty much any SQL database (also works with some NoSQL DB's like Mongo). [<a href="https://tableplus.com/download" target="_blank" rel="noreferrer nofollow">website</a>]
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">1Password</strong>
                    </p>
                    <p>
                        I use 1Password for password management across all my devices, and at this point I think it's safe to say that I couldn't live without it. I use the Family Plan because it gives me shared folders so my wife and I can both use it for shared logins and also keep our own logins separate. [<a href="https://1password.com" target="_blank" rel="noreferrer nofollow">website</a>]
                    </p>
                </li>
                <li>
                    <p className="mb-0">
                        <strong className="font-slab text-black dark:text-gray-200">HEY</strong>
                    </p>
                    <p>
                        HEY is a radically different approach to email, from the makers of Basecamp. It's definitely not for everyone, but I've been loving it. If you're interested in something new and different, fun, and privacy-focused, definitely check it out. Their website will do a much better job of pitching it than I could. [<a href="https://hey.com" target="_blank" rel="noreferrer nofollow">website</a>]
                    </p>
                </li>
            </ul>

            <h2 className="font-semibold text-2xl text-black dark:text-gray-100">Desk Setup</h2>
            <p>I've been working from home full-time since March 2020 due to the Coronavirus. While our company is still not back in the office, they have said that we will have the choice on whether or not we want to come back. My department is remaining fully remote, so for the forseeable future this is my permanent setup.</p>
            <ul>
                <li>I have one 23" HP monitor that work gave us when we went remote. It's mounted to the wall with a swivel wall mount I got on Amazon.</li>
                <li>To the left of my monitor, my laptop (currently piloting an M1 MacBook) sits on a <a href="https://www.twelvesouth.com/products/curve-for-macbook" target="_blank" rel="norollow noreferrer">Curve stand by TwelveSouth</a>. It frees up desk space and is really minimal.</li>
                <li>I have some AudioTechnica over-ear headphones when I'm in meetings or listening to music. The model I have isn't available anymore, but <a href="https://www.audio-technica.com/en-us/headphones/type/over-ear/ath-m40x" target="_blank" rel="nofollow noreferrer">this model</a> looks to be pretty much the same thing.</li>
                <li>I have a <a href="https://www.amazon.com/Microphone-TONOR-Podcasting-Compatible-TC30/dp/B08CVP2HXP" target="_blank" rel="nofollow noreferrer">Tonor USB Microphone</a> for meetings. It's pretty affordable and gives better sound quality than the built-in laptop mic.</li>
                <li>I use a Logitech webcam that work provided. Even a cheap webcam has far superior video quality than the built-in camera on the macbooks.</li>
                <li>I use an <a href="https://smile.amazon.com/Apple-Keyboard-Wireless-Rechargable-English/dp/B016QO64FI" target="_blank" rel="nofollow noreferrer">Apple Magic Keyboard</a> and <a href="http://smile.amazon.com/Apple-MJ2R2LL-A-Magic-Trackpad/dp/B016QO5YWC" target="_blank" rel="nofollow noreferrer">Apple Magic Trackpad</a>. I love the gestures on the MacBook touchpad, so I opted for the Magic Trackpad instead of a Magic Mouse, but I do hear excellent things about the mouse.</li>
                <li>I have <a href="https://www.amazon.com/gp/product/B07YFY7H7J" target="_blank" rel="nofollow noreferrer">this light</a> set up behind my monitor and webcam for better lighting on video calls. I built my desk into a shallow closet in my bedroom and the lighting situation is awful. If I don't have this turned on during meetings, my face is totally dark.</li>
                <li>The desk itself is one that I custom built. When we moved in 2020, our master bedroom had a walk-in closet and a smaller closet with sliding doors. We didn't need both, and I needed an office, so I ripped out the shelves, painted the interior of the closet, and built a desk that mounts inside the walls. I used 2x4's for the frame and made a slab from a few pieces of pine that I then glued up, stained, and sealed. It's worked out really well.</li>
            </ul>
        </article>
    </Layout>
)

export default Uses

export async function getStaticProps() {
    const configData = await import('../siteconfig.json')

    return {
        props: {
            title: configData.default.uses.title,
            description: configData.default.uses.description
        },
    }
}
