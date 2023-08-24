const TestPage = () => {
  return (
    <div className="flex flex-col space-y-5">
      <iframe
        src="https://epicweb.dev/tutorials/deploy-web-applications/project-setup-and-first-deployment/signing-up-for-fly-io/embed"
        className="aspect-video"
        referrerPolicy="unsafe-url"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation allow-storage-access-by-user-activation"
      />
      <iframe
        src="https://www.epicweb.dev/tutorials/deploy-web-applications/project-setup-and-first-deployment/intro-to-deploy-distributed-apps-with-node-js-and-fly/embed"
        className="aspect-video"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
      />
      <iframe
        src="https://www.epicweb.dev/tutorials/deploy-web-applications/persisting-data-and-automatic-deployment/configure-github-actions-for-automatic-deployment/embed"
        className="aspect-video"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
      />
    </div>
  )
}

export default TestPage
