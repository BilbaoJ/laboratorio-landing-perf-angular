import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { SnippetsComponent } from "./components/snippets/snippets.component";
import { FeaturesComponent } from "./components/features/features.component";
import { StatsComponent } from "./components/stats/stats.component";
import { IntegrationsComponent } from "./components/integrations/integrations.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { BaseChartDirective } from "ng2-charts";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SwiperModule } from "swiper/angular";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    SummaryComponent,
    SnippetsComponent,
    FeaturesComponent,
    StatsComponent,
    IntegrationsComponent,
    CustomersComponent,
    ContactComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BaseChartDirective,
    FontAwesomeModule,
    SwiperModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class HomeModule { }
