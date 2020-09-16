//> Images
// Working svg
import webIMG from "../../../../assets/content/services/web.png";
import adIMG from "../../../../assets/content/services/ad.png";
import imageIMG from "../../../../assets/content/services/image.png";

export default {
  services: [
    {
      title: "Website / Shop / App",
      img: webIMG,
      lead: "Gib Deinem Business ein einzigartiges zu Hause!",
      text: `Wir designen und entwickeln Deine unique Homepage inkl. Online-Shop und 
      sonstigen Zusatzfunktionen.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/online-presence",
      },
    },
    {
      title: "Videoproduktion",
      img: adIMG,
      lead: "Bewegte Bilder, Emotionen. Professionell umgesetzt.",
      text: ` Professionelle Aufnahmen setzen Ihr Business, Ihr Produkt oder Ihre Veranstaltung in das richtige Licht.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/ads",
      },
    },
    {
      title: "Marketing",
      img: imageIMG,
      lead: "Damit Du auch gefunden wirst. Social Network Marketing.",
      text: `Selbst das beste Produkt benötigt Marketing. Wir gestalten Deine Inhalte, erstellen Leads und überprüfen deren Performance.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/image",
      },
    },
  ],
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
