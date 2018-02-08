var addressPoints = [
  [
    "The Work of Sustaining Order in Wikipedia: The Banning of a Vandal | Conference on Computer Supported Cooperative Work, Savannah, Georgia",
    32.0835407,
    -81.0998342
  ],
  [
    "Autoethnographic Methods for Studying Data-Driven Knowledge Production | 2017 Annual Meeting of the Society for the Social Studies of Science (4S), Boston, Massachusetts",
    42.3604823,
    -71.0595678
  ],
  [
    "Black-boxing the user: internet protocol over xylophone players (IPoXP) | Conference on Human Factors in Computing (CHI), Austin, Texas",
    30.2711286,
    -97.7436995
  ],
  [
    "Data\u00ad-Driven Data Research Using Data and Databases: A Practical Critique of Methods and Approaches in \u201cBig Data\u201d Studies | Annual Meeting of the International Communication Association (ICA), Seattle, WA",
    47.6038321,
    -122.3300624
  ],
  [
    "Algorithmic Governance: The Social Roles of Bots and Assisted Editing Tools | First Annual Wikiconference NYC, New York, NY",
    40.7306458,
    -73.9866136
  ],
  [
    "Evolving Governance and Media Use in Wikipedia: A Historical Account | Media in Transition 6, Cambridge, MA",
    42.3750997,
    -71.1056157
  ],
  [
    "Successor Systems: Enacting Ideological Critique Through the Development of Software | Theorizing the Web, Brooklyn, New York",
    40.6501038,
    -73.9495823
  ],
  [
    "Hunting for Fail Whales: Lessons from Deviance and Failure in Social Computing | Conference on Human Factors in Computing (CHI), Austin, Texas",
    30.2711286,
    -97.7436995
  ],
  [
    "The Bot Multiple: Unpacking the Materialities of Automated Software Agents | Annual Meeting of the Society for the Social Study of Science (4S), Denver, CO",
    39.7391536,
    -104.9847034
  ],
  [
    "Demystifying Algorithmic Processes: The Case of Wikipedia |  The 21st Annual BCLT/BTLJ Symposium, Berkeley, California",
    37.8708393,
    -122.2728639
  ],
  [
    "Robotic Ethics and Opportunities | Robots and New Media, Berkeley, CA",
    37.8708393,
    -122.2728639
  ],
  [
    "Participation in Wikipedia\u2019s Article Deletion Processes (with Heather Ford) | International Symposium on Wikis and Open Collaboration, Mountain View, CA",
    37.3893889,
    -122.0832101
  ],
  [
    "Academic Researchers in Wikimedia Communities: Ethics, Methods, and Policies | Wikimania 2010, Gdansk, Poland",
    54.347628,
    18.6452029
  ],
  [
    "When the Levee Breaks: Without Bots, What Happens to Wikipedia\u2019s Quality Control Processes? (with Aaron Halfaker) | International Symposium on Wikis and Open Collaboration (WikiSym 2012), Hong Kong",
    22.2793278,
    114.1628131
  ],
  [
    "Crowdsourcing: Theoretical Considerations | Crowdsourcing and the Academy Symposium, Berkeley, CA",
    37.8708393,
    -122.2728639
  ],
  [
    "User-Generated Platforms in Wikipedian Governance | Annual Meeting of the Society for the Social Study of Science (4S), Cleveland, OH",
    41.5051613,
    -81.6934446
  ],
  [
    "What Aren\u2019t We Measuring?  Methods for Quantifying Wiki-Work. | International Symposium on Wikis and Open Collaboration (WikiSym 2012), Linz, Austria",
    48.3059078,
    14.286198
  ],
  [
    "\u201cThe Wisdom of Bots:\u201d An ethnographic study of the delegation of governance work to information infrastructures in Wikipedia | Annual Meeting of the Society for the Social Study of Science (4S), Barcelona, Spain",
    41.3828939,
    2.1774322
  ],
  [
    "Jupyter and the Changing Rituals around Computation | JupyterCon, New York, New York",
    40.7306458,
    -73.9866136
  ],
  [
    "Bot-Based Collective Blocklists in Twitter: The Counterpublic Moderation of a Privately-Owned Networked Public Space | Annual Meeting of the Association of Internet Researchers (AoIR), Phoenix, AZ",
    33.4485866,
    -112.0773456
  ],
  [
    "Big Data is Bullshit': Scoping the Next 5 Years of Digital Data Research | Annual Meeting of the International Communication Association (ICA), Seattle, WA",
    47.6038321,
    -122.3300624
  ],
  [
    "Defining, Designing, and Evaluating Civic Values in Human Computation and Collective Action Systems (with Nathan Matias) | Human Computation Conference (HCOMP), Citizen-X Workshop, Pittsburgh, PA",
    40.4416941,
    -79.9900861
  ],
  [
    "Successor Systems: The Role of Reflexive Algorithms in Enacting Ideological Critique | Annual Meeting of the Society for the Social Study of Science (4S), Buenos Aires, Argentina",
    -34.6075616,
    -58.437076
  ],
  [
    "Trace Ethnography Workshop | ISchools Conference, Newport Beach, CA",
    33.6170092,
    -117.9294401
  ],
  [
    "Successor Systems: The Role of Reflexive Algorithms in Enacting Ideological Critique | The Contours of Algorithmic Life, Davis, CA",
    38.545379,
    -121.7445835
  ],
  [
    "Computational Ethnography and the Ethnography of Computation | Berkeley Institute for Data Science, Berkeley, California",
    37.8708393,
    -122.2728639
  ],
  [
    "Why bots are my favorite contribution to Wikipedia | Wikipedia 15th Anniversary Birthday Bash, San Francisco, CA",
    37.7792808,
    -122.4192363
  ],
  [
    "\u201cWhat the hack?\u201d Hacking culture and discourse in data science pedagogy (with Brittany Fiore-Gartland) | Theorizing the Web, Astoria, New York",
    40.7720145,
    -73.9302673
  ],
  [
    "Time to Degree: Examining the Experiences of Graduate Students in the Long-Term Ecological Research Network | Annual Meeting of the Society for the Social Study of Science (4S), Copenhagen, Denmark",
    55.6867243,
    12.5700724
  ],
  [
    "Using Edit Sessions to Measure Participation in Wikipedia (with Aaron Halfaker) | Conference on Computer Supported Cooperative Work, San Antonio, TX",
    29.4246002,
    -98.4951405
  ],
  [
    "Scraping Wikipedia Data | The Hacker Within, BIDS, Berkeley, CA",
    37.8708393,
    -122.2728639
  ],
  [
    "But it Wouldn\u2019t Be an Encyclopedia; It Would Be a Wiki: Wikipedia and the Repurposing of WikiWikiWeb | Annual Meeting of the International Communication Association (ICA), San Juan, Puerto Rico",
    18.38423905,
    -66.0534399736473
  ],
  [
    "But it Wouldn\u2019t Be an Encyclopedia; It Would Be a Wiki: Wikipedia and the Repurposing of WikiWikiWeb | 2017 Annual Meeting of the Association of Internet Researchers, Tartu, Estonia",
    58.3727059,
    26.7237528
  ],
  [
    "The Humanity of Artificial Intelligence | Bay Area Science Festival, Albany, California",
    37.88687,
    -122.2977475
  ],
  [
    "Governing the Commons | History of Information, Berkeley, CA",
    37.8708393,
    -122.2728639
  ],
  [
    "Trace Ethnography: An ANT Method for the Study of Sociotechnical Networks |  the Second Annual Media Sociology Forum, New York, NY",
    40.7306458,
    -73.9866136
  ],
  [
    "Improving Wikipedia\u2019s Notifications to Rejected Contributors | GCOE International Symposium on Informatics Education, Kyoto, Japan",
    35.0185804,
    135.763835
  ],
  [
    "Bot Politics: How is Automation Changing the Wikipedian Society?  Critical Point of View II | Critical Point of View: Wikipedia and the Politics of Open Knowledge, Amsterdam, the Netherlands",
    52.3745403,
    4.89797550561798
  ],
  [
    "Size Matters: How Big Data Changes Everything | Bangkok Scientifique, Bangkok, Thailand",
    13.7542529,
    100.493087
  ],
  [
    "The Wisdom of Bots: A Critique of \u2018Self-Organization\u2019 in Wikipedia | Critical Point of View: Wikipedia and the Politics of Open Knowledge, Bangalore, India",
    12.9791198,
    77.5912997
  ],
  [
    "Defense Mechanism or Socialization Tactic? Improving Wikipedia\u2019s Notifications to Rejected Contributors | International Conference on Weblogs and Social Media (ICWSM), Dublin, Ireland",
    53.3497645,
    -6.2602732
  ],
  [
    "Community, Impact, and Credit: Where Do I Submit My Papers? | ACM Conference on Computer-Supported Cooperative Work (CSCW), San Antonio, TX",
    29.4246002,
    -98.4951405
  ],
  [
    "Supporting Change from Outside Systems with Design and Data | Berkman Center for Internet and Society, Cambridge, MA",
    42.3750997,
    -71.1056157
  ],
  [
    "Situated knowledges and successor systems: developing CSCW systems to enact ideological critiques | CSCW Workshop on Feminism and Feminist Approaches in Social Computing, Vancouver, BC",
    49.262428,
    -123.11554
  ],
  [
    "Conceptions and Misconceptions Academics Hold About Wikipedia | Annual Wikimedia Conference (Wikimania), Alexandria, Egypt",
    31.199004,
    29.894378
  ],
  [
    "Peer Production and Wikipedia | Social Aspects of Information Systems course, Berkeley, CA",
    37.8708393,
    -122.2728639
  ],
  [
    "Trace Ethnography: Following Coordination through Documentary Practices | Hawaii International Conference on System Sciences, Lihue, Hawaii",
    21.981111,
    -159.371111
  ],
  [
    "Machine-Generated Content: Bots and the Governance of Wikipedia | Digital Media and Learning (DML), Long Beach, CA",
    33.78538945,
    -118.158049315311
  ],
  [
    "Design by Bot: Power and Resistance in the Development of Automated Software Agents | Annual Meeting of the Association of Internet Researchers (AoIR), Denver, CO",
    39.7391536,
    -104.9847034
  ],
  [
    "Community Sustainability in Wikipedia: A Review of Research and Initiatives | PyData SF, San Francisco, CA",
    37.7792808,
    -122.4192363
  ],
  [
    "Hadoop as Grounded Theory: Is an STS Approach to Big Data Possible?  the 2013 Annual Meeting of the Society for the Social Study of Science 4S | Annual Meeting of the Society for the Social Study of Science (4S), San Diego, CA",
    32.7174209,
    -117.1627714
  ],
  [
    "\u2019The Internet is Here\u2019: The Virtuality of \u2018On-line Communities in Physical Spaces | Annual Meeting of the Society for the Social Study of Science (4S), Cleveland, OH",
    41.5051613,
    -81.6934446
  ],
  [
    "Drowning in Data: Industry and Academic Approaches to Mixed Methods in \u201cHolistic\u201d Big Data Studies | Annual Meeting of the International Communication Association (ICA), Fukuoka, Japan",
    33.6251241,
    130.6180016
  ],
  [
    "Governing Open Source Projects at Scale: Lessons from Wikipedia's Growing Pains | SciPy, Austin, Texas",
    30.2711286,
    -97.7436995
  ],
  [
    "The Social Roles of Bots and Assisted Editing Tools | International Symposium on Wikis and Open Collaboration, Orlando, Florida",
    28.5423999,
    -81.3794368
  ],
  [
    "Actor-Network Theory | Social Aspects of Information Systems course, Berkeley, CA",
    37.8708393,
    -122.2728639
  ],
  [
    "Moderating Online Conversation Spaces | Social Aspects of Information Systems course, Berkeley, CA",
    37.8708393,
    -122.2728639
  ],
  [
    "Administrative Support Bots in Wikipedia: How Automation Can Transform the Affordances of Platforms and the Governance of Communities | Communicating with Machines workshop, Fukuoka, Japan",
    33.6251241,
    130.6180016
  ],
  [
    "Successor Systems: Lessons for Big Data From Feminist Epistemology and Activism | Big Data: Critiques and Alternatives workshop, Fukuoka, Japan",
    33.6251241,
    130.6180016
  ],
  [
    "Successor Systems: The Role of Reflexive Algorithms in Enacting Ideological Critique | Annual Meeting of the Association of Internet Researchers (AoIR), Daegu, South Korea",
    35.8494916,
    128.5599518
  ],
  [
    "Trace literacy: a framework for holistically conceptualizing newcomer socialization in socio-technical systems | Infosocial, Evanston, IL",
    42.0447388,
    -87.6930459
  ],
  [
    "Values Where? Interrogating Client-Side Scripting as a Design Process | Theorizing the Web, New York, NY",
    40.7306458,
    -73.9866136
  ],
  [
    "Working With/in Wikipedia: Infrastructures of Knowing and Knowledge Production | Annual Conference on Science and Technology in Society, Washington, DC",
    38.8949549,
    -77.0366456
  ],
  [
    "Algorithms as agents of gatekeeping, governance, and articulation work in Wikipedia | Algorithms, Automation, and Politics workshop, Fukuoka, Japan",
    33.6251241,
    130.6180016
  ],
  [
    "Moderating harassment in Twitter with blockbots: a counterpublic and algorithmic strategy | Theorizing the Web, Astoria, New York",
    40.7720145,
    -73.9302673
  ],
  [
    "Where Are the Missing Wikipedians? The Sociology of a Bot | Annual Meeting of the Society for the Social Study of Science (4S), Arlington, Virginia",
    38.8903961,
    -77.0841585
  ],
  [
    "A Communicative Ethnography of Argumentative Strategies in a Wikipedian Content Dispute | Exploring New Media Worlds, College Station, TX",
    30.6253463,
    -96.3271538
  ],
    [
    "Computational Ethnography and the Ethnography of Computation | School of Information Sciences, University of Illinois at Urbana-Champaign, Urbana, Illinois",
    40.1048122,
    -88.2315515
  ],
    [
    "Computational Ethnography and the Ethnography of Computation | School of Library and Information Sciences, University of North Carolina, Chapel Hill, North Carolina",
     35.9080737,
    -79.0503005
  ],
  [
    "Does Facebook Have Civil Servants? On Governmentality and Computational Social Science | CSCW Workshop on Ethics for Studying Sociotechnical Systems in a Big Data World, Vancouver, BC",
    49.262428,
    -123.11554
  ]
];
