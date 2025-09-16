import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Car, Leaf, Target } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Beepr</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#business" className="text-muted-foreground hover:text-foreground transition-colors">
              Business Model
            </a>
            <a href="#expansion" className="text-muted-foreground hover:text-foreground transition-colors">
              Global Expansion
            </a>
            <a href="#fleet" className="text-muted-foreground hover:text-foreground transition-colors">
              Fleet
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Partnership
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            Global BEV Smart Shared Mobility Solution Provider
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Every Mile is <span className="text-primary">A Promise</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Creating high-quality green shared mobility ecosystems through owned fleet + cross-platform synergy,
            delivering differentiated mobility experiences with premium electric vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Partnership <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Business Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Business Plan Highlights - Matching the PDF style */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                BUSINESS PLAN
                <br />
                Highlights
              </h2>
              <div className="mt-8">
                <img
                  src="/images/traffic-scene.png"
                  alt="Busy traffic scene with various vehicles"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">Corporate Strategy and Positioning</h3>
              <div className="space-y-4 text-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    As a global creator of high-quality green shared mobility ecosystems, our core model revolves around
                    'owned fleet + cross-platform synergy', focusing on operating premium electric vehicle (EV) models
                    to deliver differentiated mobility experiences through upgraded vehicle quality and standardized
                    services.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    We closely engage with ride-hailing platforms and aggregators (To be a Car Partners +Driver
                    Partners) to accurately match regional market demands and build an integrated digital ecosystem
                    spanning 'people/driver-vehicles-depots-platforms'.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed font-semibold">Our mission: Every mile is a promise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every Mile is A Promise - delivering sustainable mobility solutions that create value for drivers,
                  partners, and communities.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be One of the TOP 10 C+D Partners WorldWide, leading the transformation to sustainable mobility.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Position</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Global BEV Smart Shared Mobility Solution Provider focused on premium electric vehicle operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Early Mover Advantages</h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Early mover in the sustainable BEV Shared Mobility Industry market
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle className="text-lg text-foreground">Target Tier One Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Select high-quality BEVs and establish industry-leading service standards across dimensions like
                  vehicle delivery timeliness, full-cycle maintenance response, and customized service solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <CardTitle className="text-lg text-foreground">Global Expansion Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  By laying out key overseas markets, we tap into the differentiated demands and growth potential of BEV
                  CP + DP mode in different regions, and preemptively secure international market shares.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <CardTitle className="text-lg text-foreground">Iconic ECO SYSTEM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Through data interconnection and process collaboration, we reduce costs, improve efficiency, and
                  optimize the entire operational value chain with greater efficiency and operational optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section id="expansion" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Global Expansion Strategy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic market entry across key regions to capture differentiated demands and growth potential
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Badge className="bg-primary text-primary-foreground">Phase 1</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Indonesia Market Penetration</h3>
                  <p className="text-muted-foreground">
                    Initial 1,000 vehicles expanding to 10,000–15,000 vehicles with deep market penetration strategy.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge className="bg-secondary text-secondary-foreground">Phase 2</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Southeast Asia Expansion</h3>
                  <p className="text-muted-foreground">
                    Singapore, Malaysia, Thailand, Vietnam - replicating the Indonesia model via local partnerships.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge variant="outline">Phase 3</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Global Markets</h3>
                  <p className="text-muted-foreground">
                    Netherlands & Pan-EU, Latin America & Mexico - exploring new energy hubs and demographic dividends.
                  </p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Financial Projection</CardTitle>
                <CardDescription>1,000 Vehicle Fleet - 3 Year Model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2025 (Launch Year)</span>
                  <span className="font-semibold text-destructive">-$7.36M EBITDA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2026E</span>
                  <span className="font-semibold text-primary">$4.96M EBITDA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2027E (Breakeven)</span>
                  <span className="font-semibold text-primary">$3.53M EBITDA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">2028E</span>
                  <span className="font-semibold text-primary">$8.18M EBITDA</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section id="fleet" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Premium Electric Fleet</h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              100% BEV fleet with high-quality models across different service tiers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Comfort</Badge>
                <CardTitle>Entry Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">AION Y Plus</p>
                <p className="font-medium">BYD M6</p>
                <p className="text-sm text-foreground">
                  Reliable and efficient electric vehicles for everyday mobility needs
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Premium</Badge>
                <CardTitle>Mid-Tier</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">GEELY EX5</p>
                <p className="font-medium">XPENG G6</p>
                <p className="text-sm text-foreground">
                  Enhanced comfort and technology for premium mobility experiences
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Luxury</Badge>
                <CardTitle>High-End</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">XPENG X9</p>
                <p className="font-medium">DENZA D9</p>
                <p className="text-sm text-foreground">
                  Luxury electric vehicles with premium features and superior comfort
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Invitation */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Co-create a Green Mobility Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Beepr Trans and Share Global Growth Dividends. Partner with us to revolutionize sustainable
            transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Partnership Inquiry
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Download Business Plan
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">
              Contact:{" "}
              <a href="mailto:project_bt_sea@beeprtrans.com" className="underline hover:no-underline">
                project_bt_sea@beeprtrans.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Beepr</span>
              </div>
              <p className="text-muted-foreground text-sm">Global BEV Smart Shared Mobility Solution Provider</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#business" className="hover:text-foreground transition-colors">
                    Business Model
                  </a>
                </li>
                <li>
                  <a href="#expansion" className="hover:text-foreground transition-colors">
                    Global Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#fleet" className="hover:text-foreground transition-colors">
                    Electric Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Driver Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Platform Integration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hong Kong (Global HQ)</li>
                <li>Indonesia (Phase 1)</li>
                <li>
                  <a href="mailto:project_bt_sea@beeprtrans.com" className="hover:text-foreground transition-colors">
                    project_bt_sea@beeprtrans.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Beepr Trans SEA Investment Limited. Every Mile is A Promise.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
