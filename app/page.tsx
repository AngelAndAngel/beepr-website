'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight, Globe, Car, Leaf, Target, ChevronDown, Instagram, Linkedin, Youtube } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"
import { TikTokIcon } from "@/components/tiktok-icon"

export default function Home() {
  const { t } = useLanguage()
  const [showExpansion, setShowExpansion] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#expansion') {
        setShowExpansion(true)
        // 等待DOM更新后再滚动
        setTimeout(() => {
          const element = document.getElementById('expansion')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href='' className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">BeeprTrans</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                {t('nav.about')}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#business-model" className="w-full">{t('nav.business')}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#expansion" className="w-full">{t('nav.expansion')}</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <a href="#business" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.business')}
            </a> */}
            {/* <a href="#expansion" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.expansion')}
            </a> */}
            <a href="#fleet" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.fleet')}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.partnership')}
            </a>
             <a href="" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.career')}
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button className="bg-primary hover:bg-primary/90">{t('nav.contact')}</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('hero.title').split('A Promise')[0]}<span className="text-primary">{t('hero.title').includes('A Promise') ? 'A Promise' : (t('hero.title').includes('Janji') ? 'Janji' : 'A Promise')}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t('hero.cta')} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              {t('hero.learn-more')}
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
                {t('business.title')}
                <br />
                {t('business.subtitle')}
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
              <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">{t('business.strategy.title')}</h3>
              <div className="space-y-4 text-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    {t('business.strategy.point1')}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    {t('business.strategy.point2')}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  {/* <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed font-semibold">{t('business.strategy.point3')}</p> */}
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
                <CardTitle>{t('mission.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('mission.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>{t('vision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('vision.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>{t('position.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('position.description')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t('advantages.title')}</h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              {t('advantages.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle className="text-lg text-foreground">{t('advantages.service.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  {t('advantages.service.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <CardTitle className="text-lg text-foreground">{t('advantages.expansion.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  {t('advantages.expansion.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <CardTitle className="text-lg text-foreground">{t('advantages.ecosystem.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  {t('advantages.ecosystem.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section id="expansion" className={`py-20 bg-card/30 ${showExpansion ? '' : 'hidden'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('expansion.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('expansion.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Badge className="bg-primary text-primary-foreground">Phase 1</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t('expansion.phase1.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('expansion.phase1.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge className="bg-secondary text-secondary-foreground">Phase 2</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t('expansion.phase2.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('expansion.phase2.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge variant="outline">Phase 3</Badge>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t('expansion.phase3.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('expansion.phase3.description')}
                  </p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{t('expansion.financial.title')}</CardTitle>
                <CardDescription>{t('expansion.financial.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('expansion.financial.2025')}</span>
                  <span className="font-semibold text-destructive">-$7.36M EBITDA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('expansion.financial.2026')}</span>
                  <span className="font-semibold text-primary">$4.96M EBITDA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('expansion.financial.2027')}</span>
                  <span className="font-semibold text-primary">$3.53M EBITDA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('expansion.financial.2028')}</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{t('fleet.title')}</h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              {t('fleet.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Comfort</Badge>
                <CardTitle>{t('fleet.comfort.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">AION Y Plus</p>
                <p className="font-medium">BYD M6</p>
                <p className="text-sm text-foreground">
                  {t('fleet.comfort.description')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Premium</Badge>
                <CardTitle>{t('fleet.premium.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">GEELY EX5</p>
                <p className="font-medium">XPENG G6</p>
                <p className="text-sm text-foreground">
                  {t('fleet.premium.description')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Luxury</Badge>
                <CardTitle>{t('fleet.luxury.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">XPENG X9</p>
                <p className="font-medium">DENZA D9</p>
                <p className="text-sm text-foreground">
                  {t('fleet.luxury.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gradient-to-b from-yellow-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('news.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-red-600 text-white border-0 min-h-[200px] flex flex-col justify-center items-center p-8 hover:bg-red-700 transition-colors cursor-pointer">
              <CardContent className="text-center space-y-4">
                <h3 className="text-xl font-bold">{t('news.card1.title')}</h3>
                <p className="text-red-100">{t('news.card1.description')}</p>
              </CardContent>
            </Card>
            <Card className="bg-red-600 text-white border-0 min-h-[200px] flex flex-col justify-center items-center p-8 hover:bg-red-700 transition-colors cursor-pointer">
              <CardContent className="text-center space-y-4">
                <h3 className="text-xl font-bold">{t('news.card2.title')}</h3>
                <p className="text-red-100">{t('news.card2.description')}</p>
              </CardContent>
            </Card>
            <Card className="bg-red-600 text-white border-0 min-h-[200px] flex flex-col justify-center items-center p-8 hover:bg-red-700 transition-colors cursor-pointer">
              <CardContent className="text-center space-y-4">
                <h3 className="text-xl font-bold">{t('news.card3.title')}</h3>
                <p className="text-red-100">{t('news.card3.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Invitation */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t('partnership.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('partnership.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              {t('partnership.inquiry')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              {t('partnership.download')}
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            {/* <p className="text-sm opacity-75">
              {t('partnership.contact')}{" "}
              <a href="mailto:project_bt_sea@beeprtrans.com" className="underline hover:no-underline">
                project_bt_sea@beeprtrans.com
              </a>
            </p> */}
          </div>
        </div>
        
        {/* Contact Information Section */}
        <div className="text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Contact Details */}
              <div className="space-y-4">
                <div className="text-sm">
                  <p>{t('contact.email.partnership')}</p>
                </div>
                <div className="text-sm">
                  <p>{t('contact.email.career')}</p>
                </div>
                <div className="text-sm">
                  <p>{t('contact.whatsapp')}</p>
                </div>
                <div className="text-sm">
                  <p>{t('contact.address')}</p>
                </div>
              </div>
              
              {/* Right Column - Social Media */}
              <div className="flex flex-col items-end justify-center">
                <h3 className="text-lg font-semibold mb-4">{t('contact.connect')}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                     <TikTokIcon className="w-6 h-6" />
                   </a>
                </div>
              </div>
            </div>
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
                <span className="text-xl font-bold text-foreground">BeeprTrans</span>
              </div>
              <p className="text-muted-foreground text-sm">{t('hero.badge')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    {t('footer.about')}
                  </a>
                </li>
                <li>
                  <a href="#business" className="hover:text-foreground transition-colors">
                    {t('footer.business')}
                  </a>
                </li>
                <li>
                  <a href="#expansion" className="hover:text-foreground transition-colors">
                    {t('footer.strategy')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#fleet" className="hover:text-foreground transition-colors">
                    {t('footer.fleet')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t('footer.driver')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t('footer.platform')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t('footer.hq')}</li>
                <li>{t('footer.indonesia')}</li>
                {/* <li>
                  <a href="mailto:project_bt_sea@beeprtrans.com" className="hover:text-foreground transition-colors">
                    project_bt_sea@beeprtrans.com
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
