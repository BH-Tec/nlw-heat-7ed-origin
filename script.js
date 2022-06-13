const linksSocialMedia = {
  github: "brunodorea",
  youtube: "UCQXkktFiWvliGP0m91cYyyg",
  instagram: "bruno.h_",
  facebook: "bh.henriique",
  twitter: "brunodorea"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()