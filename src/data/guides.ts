export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  region: string;
  appFocus: string[];
  intent: string;
  updated: string;
  priority: "MVP" | "Next";
  sections: {
    heading: string;
    body: string[];
  }[];
  pitfalls: string[];
  sourcesToCheck: string[];
};

export const guides: Guide[] = [
  {
    slug: "organic-maps-tokyo-subway-offline",
    title: "Organic Maps for Tokyo Subway Offline: Setup, Transfers, and Common Gaps",
    description:
      "A practical setup guide for using Organic Maps around Tokyo stations without mobile data, with realistic limits around indoor routing and rail transfers.",
    category: "City transit",
    region: "Japan",
    appFocus: ["Organic Maps", "Google Maps"],
    intent: "organic maps tokyo subway offline",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Best use case",
        body: [
          "Organic Maps is strongest for street-level walking, station exits, saved places, and battery-friendly navigation. It is not a complete replacement for dedicated live transit apps because subway disruptions, platform changes, and indoor transfer paths can change quickly.",
          "For Tokyo, the safer offline setup is to download the city map, save the hotel and major stations, and keep a separate rail app or official route page bookmarked for live timing when data is available."
        ]
      },
      {
        heading: "Offline setup",
        body: [
          "Download the Japan map area before leaving Wi-Fi, open saved places once so labels render, and pin arrival airport, hotel, nearest subway stations, and backup meeting points.",
          "Keep Google Maps offline areas as a fallback if you rely on searchable business listings, but do not assume Google offline mode will handle every transit detail."
        ]
      },
      {
        heading: "Transfer caveats",
        body: [
          "Treat offline subway routing as planning support rather than final authority. Large stations can have paid-area transfers, underground malls, and exits that are difficult to represent cleanly in general-purpose offline maps.",
          "When the route matters, cross-check station names and line colors while online, then use the offline map mainly for the walk to the correct entrance or exit."
        ]
      }
    ],
    pitfalls: [
      "Assuming indoor station routing is complete",
      "Forgetting to save station exits and hotel locations",
      "Relying on offline maps for live timetable changes"
    ],
    sourcesToCheck: [
      "Organic Maps documentation and GitHub issues",
      "Tokyo Metro and JR East official guidance",
      "Reddit travel threads about Tokyo offline navigation"
    ]
  },
  {
    slug: "hiking-gps-no-signal-europe",
    title: "Hiking GPS With No Signal in Europe: Offline Map Stack for Safer Trails",
    description:
      "How to prepare offline trail maps, GPX files, battery backups, and map app fallbacks for European hikes where cellular coverage is unreliable.",
    category: "Hiking",
    region: "Europe",
    appFocus: ["Organic Maps", "OsmAnd", "Komoot"],
    intent: "hiking gps no signal europe",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Recommended stack",
        body: [
          "Use one primary hiking app with downloaded terrain or contour data, one general offline map app, and locally saved GPX files. This avoids a single-app failure when trail metadata or map rendering is weak in a specific region.",
          "For longer hikes, keep airplane mode on, enable GPS only when needed, and carry a power bank sized for the route length."
        ]
      },
      {
        heading: "Before the trail",
        body: [
          "Download the map area over Wi-Fi, import the route GPX, test that the route opens while the phone is offline, and screenshot key junctions or hut locations.",
          "Check whether the route crosses borders or remote valleys. Offline map packages can be split by country or region, so one download may not cover the whole walk."
        ]
      },
      {
        heading: "Limitations",
        body: [
          "Open map data can be excellent in some European hiking areas and sparse in others. Trail closures, snow conditions, ferry schedules, and hut availability should be checked through official or local sources.",
          "Offline maps are a navigation aid, not a safety guarantee. For remote routes, carry the usual local safety equipment and know emergency numbers."
        ]
      }
    ],
    pitfalls: [
      "Downloading only street maps without contours",
      "Not testing GPX access while offline",
      "Letting GPS and screen brightness drain the battery early"
    ],
    sourcesToCheck: [
      "OsmAnd documentation",
      "Komoot route export guidance",
      "Local park or trail authority pages"
    ]
  },
  {
    slug: "privacy-map-app-no-data-collection",
    title: "Privacy Map Apps With Less Data Collection: Offline Options Compared",
    description:
      "A practical comparison framework for travelers who want offline navigation with minimal tracking, fewer account requirements, and open map data.",
    category: "Privacy",
    region: "Global",
    appFocus: ["Organic Maps", "OsmAnd", "Maps.me", "Google Maps"],
    intent: "privacy map app no data collection",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "What to compare",
        body: [
          "Look at account requirements, offline capability, analytics settings, ad model, location permission behavior, and whether the app can work without cloud sync.",
          "OpenStreetMap-based apps often give privacy-conscious users more control, but the exact app policy and mobile operating system permissions still matter."
        ]
      },
      {
        heading: "Offline privacy workflow",
        body: [
          "Download maps on trusted Wi-Fi, disable unnecessary app permissions, save places locally where possible, and avoid signing in unless a feature requires it.",
          "For sensitive trips, test the app in airplane mode before travel and remove old downloads after the trip."
        ]
      },
      {
        heading: "Tradeoffs",
        body: [
          "Less data collection can mean fewer live reviews, weaker business search, no traffic, and less polished transit information. The privacy-first setup works best when paired with pre-trip research.",
          "For many travelers, the right answer is a private offline map for navigation plus a separate online search tool used only when needed."
        ]
      }
    ],
    pitfalls: [
      "Confusing offline mode with zero data collection",
      "Ignoring mobile OS location history settings",
      "Expecting privacy-first apps to match live business search"
    ],
    sourcesToCheck: [
      "App privacy labels and privacy policies",
      "Organic Maps and OsmAnd documentation",
      "OpenStreetMap community discussions"
    ]
  },
  {
    slug: "google-maps-offline-japan-travel",
    title: "Google Maps Offline for Japan Travel: What Works and What Does Not",
    description:
      "How to use Google Maps offline areas in Japan for saved places and walking backup, while avoiding common assumptions about transit and live data.",
    category: "Travel basics",
    region: "Japan",
    appFocus: ["Google Maps"],
    intent: "google maps offline japan travel",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Useful offline features",
        body: [
          "Offline areas can help with map display, place context, and driving or walking orientation. They are especially useful when arriving at airports, navigating around hotels, or checking nearby streets without roaming.",
          "Saved places should be organized before travel so the offline map is not just a blank city grid."
        ]
      },
      {
        heading: "Common gaps",
        body: [
          "Transit routing, live hours, reviews, and real-time disruptions are online-heavy features. For Japan rail travel, plan routes while online and keep station names saved in both English and local script when possible.",
          "Offline download boundaries matter. A Tokyo area download may not cover side trips far outside the city."
        ]
      },
      {
        heading: "Fallback setup",
        body: [
          "Pair Google offline areas with an OpenStreetMap-based app and a notes file containing hotel address, airport route, and key station exits.",
          "If you use an eSIM, install and activate it before the trip, but still prepare offline maps for underground stations or weak-signal moments."
        ]
      }
    ],
    pitfalls: [
      "Expecting offline public transit routing",
      "Downloading too small an area",
      "Saving places after going offline"
    ],
    sourcesToCheck: [
      "Google Maps Help",
      "Japan travel community reports",
      "Airport and rail operator pages"
    ]
  },
  {
    slug: "best-offline-map-app-international-travel",
    title: "Best Offline Map App for International Travel: A Practical Shortlist",
    description:
      "A short, non-hyped comparison of offline map apps for travelers, with use cases for cities, road trips, hiking, and privacy.",
    category: "App comparison",
    region: "Global",
    appFocus: ["Google Maps", "Organic Maps", "OsmAnd", "Maps.me"],
    intent: "best offline map app international travel",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Quick recommendation",
        body: [
          "Most travelers should use Google Maps offline areas for familiar place search fallback and add Organic Maps or OsmAnd for a stronger offline-first experience.",
          "Hikers and overlanders should lean toward apps with GPX, contours, and more granular map downloads."
        ]
      },
      {
        heading: "Selection criteria",
        body: [
          "Compare download size, offline search, walking reliability, driving support, transit limits, privacy posture, GPX support, and how often map data is updated.",
          "The best app depends on the trip. A city weekend, a mountain hike, and a border-crossing road trip are different navigation problems."
        ]
      },
      {
        heading: "How to test",
        body: [
          "Before travel, put the phone in airplane mode and try searching saved places, starting a route, opening your hotel area, and locating nearby transit stops.",
          "Delete and redownload maps after major app updates or before long trips so stale local data does not surprise you."
        ]
      }
    ],
    pitfalls: [
      "Choosing one app for every scenario",
      "Ignoring download size and storage",
      "Skipping offline testing before departure"
    ],
    sourcesToCheck: [
      "Official app documentation",
      "Recent app store release notes",
      "Reddit and travel forum comparisons"
    ]
  },
  {
    slug: "offline-maps-southeast-asia-backpacking",
    title: "Offline Maps for Southeast Asia Backpacking: Cities, Islands, and Border Crossings",
    description:
      "How to prepare offline maps for Southeast Asia routes where islands, buses, ferries, and border crossings make navigation less predictable.",
    category: "Backpacking",
    region: "Southeast Asia",
    appFocus: ["Google Maps", "Organic Maps", "Maps.me"],
    intent: "offline maps southeast asia backpacking",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Route-first downloads",
        body: [
          "Download maps by route, not just by country. Backpacking routes often jump between cities, islands, and border towns, so a single city download can miss the next transfer point.",
          "Save bus stations, ferry piers, guesthouse neighborhoods, and border checkpoints before moving."
        ]
      },
      {
        heading: "Transport reality",
        body: [
          "Offline maps can show roads and landmarks, but minibus pickup points, ferry changes, and informal transfers may not be reliable in map data.",
          "Use offline maps for orientation and pair them with recent operator messages, booking confirmations, or local accommodation instructions."
        ]
      },
      {
        heading: "Data backup",
        body: [
          "An eSIM is still useful, especially for ride-hailing and translation, but offline maps reduce stress when the signal drops, the SIM setup fails, or you arrive late.",
          "Keep screenshots of addresses in local language where available."
        ]
      }
    ],
    pitfalls: [
      "Only downloading capital cities",
      "Trusting old ferry or bus pins",
      "Forgetting local-language address screenshots"
    ],
    sourcesToCheck: [
      "Backpacker forum route reports",
      "Transport operator pages",
      "App map update notes"
    ]
  },
  {
    slug: "offline-road-trip-maps-usa-national-parks",
    title: "Offline Road Trip Maps for U.S. National Parks: Navigation Without Cell Service",
    description:
      "A road trip preparation guide for national parks, scenic highways, trailheads, and lodging areas with weak or no mobile coverage.",
    category: "Road trips",
    region: "United States",
    appFocus: ["Google Maps", "Organic Maps", "OsmAnd"],
    intent: "offline road trip maps usa national parks",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Download zones",
        body: [
          "Download the full drive corridor, not just the park entrance. Coverage often disappears on approach roads, scenic byways, and lodging areas outside the park boundary.",
          "Save trailheads, visitor centers, campgrounds, gas stations, and the nearest town with services."
        ]
      },
      {
        heading: "Park-specific checks",
        body: [
          "Road closures, timed entry rules, shuttle systems, and seasonal gates should be checked through official park sources before the trip.",
          "Offline map routing can miss temporary closures or restrictions, so treat it as a map layer rather than a live park operations feed."
        ]
      },
      {
        heading: "Device setup",
        body: [
          "Bring a car charger, keep one backup app installed, and preload lodging confirmations or campground maps.",
          "If multiple people are traveling, have at least two phones with offline maps downloaded."
        ]
      }
    ],
    pitfalls: [
      "Downloading only inside the park boundary",
      "Missing seasonal road closures",
      "Depending on one phone for the entire group"
    ],
    sourcesToCheck: [
      "National Park Service pages",
      "Google Maps Help",
      "OsmAnd and Organic Maps documentation"
    ]
  },
  {
    slug: "kiwix-travel-wiki-offline",
    title: "Kiwix for Offline Travel Research: Pairing Wiki Guides With Offline Maps",
    description:
      "How Kiwix can complement offline maps by saving travel reference material, destination context, and practical notes for no-signal trips.",
    category: "Offline research",
    region: "Global",
    appFocus: ["Kiwix", "Organic Maps"],
    intent: "kiwix travel wiki offline",
    updated: "2026-07-07",
    priority: "Next",
    sections: [
      {
        heading: "Why pair Kiwix with maps",
        body: [
          "Offline maps show where things are. Offline reference libraries help explain what they are, how to plan around them, and what practical context to remember when the web is unavailable.",
          "Kiwix is most useful before a trip when you can choose focused downloads instead of trying to mirror the whole internet."
        ]
      },
      {
        heading: "Practical setup",
        body: [
          "Download only the destination or topic packages you need, verify they open offline, and create a simple note with links between map pins and saved reference pages.",
          "Keep file sizes in mind, especially on phones with limited storage."
        ]
      },
      {
        heading: "Limitations",
        body: [
          "Offline reference content can become outdated. Visa rules, transport schedules, opening hours, and safety alerts still need current official confirmation.",
          "Use Kiwix as a research backup, not the final source for time-sensitive travel decisions."
        ]
      }
    ],
    pitfalls: [
      "Downloading huge archives without testing storage",
      "Using stale offline pages for rules or schedules",
      "Failing to connect reference notes with map pins"
    ],
    sourcesToCheck: [
      "Kiwix documentation",
      "Wikivoyage community pages",
      "Destination official tourism pages"
    ]
  },
  {
    slug: "offline-maps-apple-watch-travel",
    title: "Offline Maps on Apple Watch for Travel: Useful Backup or Battery Trap?",
    description:
      "A realistic planning guide for travelers considering watch-based navigation when phone signal, battery, or pocket access is limited.",
    category: "Gear",
    region: "Global",
    appFocus: ["Apple Maps", "WorkOutDoors", "Google Maps"],
    intent: "offline maps apple watch travel",
    updated: "2026-07-07",
    priority: "Next",
    sections: [
      {
        heading: "Best fit",
        body: [
          "A watch can be useful for glanceable turns, short walks, and route awareness when your phone is packed away. It is less ideal as the only offline map device for a full travel day.",
          "Battery life, app support, and whether the map truly works without the phone nearby are the key checks."
        ]
      },
      {
        heading: "Before travel",
        body: [
          "Test the exact route type offline, with cellular disabled if your watch has it. Confirm whether maps, route lines, and saved places remain available.",
          "Carry the phone map setup anyway. The watch should be a convenience layer, not the only navigation source."
        ]
      },
      {
        heading: "Battery planning",
        body: [
          "Turn-by-turn navigation, bright screens, workouts, and GPS use can drain a watch quickly. For long days, reduce notification noise and keep a phone power bank available.",
          "For hiking, consider a route-focused app and test GPX behavior before relying on it."
        ]
      }
    ],
    pitfalls: [
      "Assuming phone-downloaded maps sync fully to the watch",
      "Not testing airplane mode behavior",
      "Underestimating GPS battery drain"
    ],
    sourcesToCheck: [
      "Apple support documentation",
      "Watch app documentation",
      "Recent user reports on offline behavior"
    ]
  },
  {
    slug: "organic-maps-vs-osmand-travel",
    title: "Organic Maps vs OsmAnd for Travel: Which Offline Map Fits Your Trip?",
    description:
      "A travel-focused comparison of two OpenStreetMap-based apps, emphasizing setup effort, offline search, hiking features, and privacy tradeoffs.",
    category: "App comparison",
    region: "Global",
    appFocus: ["Organic Maps", "OsmAnd"],
    intent: "organic maps vs osmand travel",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Short answer",
        body: [
          "Organic Maps is often easier for casual city travel and quick offline navigation. OsmAnd offers deeper controls, map layers, and outdoor features, but it can take more setup time.",
          "The best choice depends on whether you want simple travel backup or a configurable navigation toolkit."
        ]
      },
      {
        heading: "Where Organic Maps fits",
        body: [
          "Use it for lightweight offline city walking, saved places, simple routes, and privacy-conscious travel without many settings.",
          "It is a good second app even when you primarily use Google Maps."
        ]
      },
      {
        heading: "Where OsmAnd fits",
        body: [
          "Use it for GPX routes, hiking, cycling, overlays, contour-oriented planning, and cases where you want more map controls.",
          "Set it up before travel. The feature depth is useful, but not something most people want to learn at an airport."
        ]
      }
    ],
    pitfalls: [
      "Installing OsmAnd only after losing signal",
      "Expecting Organic Maps to cover every advanced route layer",
      "Comparing privacy without checking current policies"
    ],
    sourcesToCheck: [
      "Organic Maps documentation",
      "OsmAnd documentation",
      "OpenStreetMap community discussions"
    ]
  },
  {
    slug: "offline-maps-esim-backup-travel",
    title: "Offline Maps and eSIMs: The Travel Backup Setup That Actually Works",
    description:
      "How to combine eSIM data with offline maps so navigation still works when activation, roaming, underground stations, or remote coverage fail.",
    category: "Travel data",
    region: "Global",
    appFocus: ["Google Maps", "Organic Maps", "Airalo", "Holafly", "Nomad"],
    intent: "offline maps esim backup travel",
    updated: "2026-07-07",
    priority: "MVP",
    sections: [
      {
        heading: "Why both matter",
        body: [
          "An eSIM helps with live search, rideshare, translation, and messaging. Offline maps help when the eSIM activation fails, the signal drops, or you are underground, rural, or low on battery.",
          "The strongest travel setup uses both instead of treating them as substitutes."
        ]
      },
      {
        heading: "Setup order",
        body: [
          "Install the eSIM before the trip if the provider supports it, download offline maps on Wi-Fi, save first-day destinations, and write down the hotel address separately.",
          "After arrival, use mobile data for live checks but keep offline routing available for the no-signal moments."
        ]
      },
      {
        heading: "Affiliate-safe content angle",
        body: [
          "When recommending eSIM providers, disclose affiliate relationships and focus on compatibility, coverage, refund rules, and activation workflow.",
          "Do not imply an eSIM makes offline preparation unnecessary."
        ]
      }
    ],
    pitfalls: [
      "Waiting until arrival to install everything",
      "Buying data without checking device compatibility",
      "Letting affiliate content weaken the practical guide"
    ],
    sourcesToCheck: [
      "eSIM provider help centers",
      "Phone manufacturer eSIM support pages",
      "Recent traveler reports"
    ]
  },
  {
    slug: "offline-map-storage-phone-space",
    title: "How Much Phone Storage Do Offline Maps Need? A Traveler's Planning Guide",
    description:
      "A storage planning guide for offline map downloads, reference files, GPX routes, photos, translation packs, and eSIM apps.",
    category: "Setup",
    region: "Global",
    appFocus: ["Google Maps", "OsmAnd", "Organic Maps", "Kiwix"],
    intent: "offline map storage phone space",
    updated: "2026-07-07",
    priority: "Next",
    sections: [
      {
        heading: "What uses space",
        body: [
          "Offline maps, terrain layers, Wikipedia-style reference packs, language packs, downloaded booking PDFs, photos, and messaging media can all compete for storage during travel.",
          "Map size varies by region, detail level, app, and optional layers."
        ]
      },
      {
        heading: "Planning method",
        body: [
          "Download the exact regions you need, check storage usage in phone settings, and leave a buffer for photos and app cache.",
          "Delete old map regions from previous trips before downloading new ones."
        ]
      },
      {
        heading: "Low-storage workflow",
        body: [
          "Prioritize arrival city, lodging area, transfer route, and remote day trips. Skip large country-wide downloads when your trip only needs a few corridors.",
          "Store PDFs and screenshots in a clearly named album or folder so they are usable offline."
        ]
      }
    ],
    pitfalls: [
      "Downloading whole countries unnecessarily",
      "Forgetting terrain and reference files",
      "Running out of space for photos mid-trip"
    ],
    sourcesToCheck: [
      "Official app storage documentation",
      "Phone OS storage tools",
      "User reports on map package sizes"
    ]
  }
];

export const featuredGuides = guides.filter((guide) => guide.priority === "MVP").slice(0, 6);

export const categories = Array.from(new Set(guides.map((guide) => guide.category))).sort();
