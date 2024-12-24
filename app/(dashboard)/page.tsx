import {
    CircleDollarSign,
    DollarSign,
    PackageIcon,
    ShoppingBasketIcon,
} from 'lucide-react';
import Header, { HeaderLeft, HeaderSubtitle, HeaderTitle } from '../_components/header';
import SummaryCard, {
    SummaryCardIcon,
    SummaryCardTitle,
    SummaryCardValue,
} from './_components/sunnary-card';
import { getDashboard } from '../_data-access/dashboard/get-dashboard';
import { formatCurrency } from '../_helpers/currency';
import RevenueChart from './_components/revenue-chart';

const DashboardPage = async () => {
    const { totalProducts, totalSales, totalRevenue, totalStock, totayRevenue, totalLast14DaysRevenue } =
        await getDashboard();
    return (
        <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
            <Header>
                <HeaderLeft>
                    <HeaderSubtitle>Deshboard</HeaderSubtitle>
                    <HeaderTitle>Vendas</HeaderTitle>
                </HeaderLeft>
            </Header>
            <div className="grid grid-cols-2 gap-6">
                <SummaryCard>
                    <SummaryCardIcon>
                        <DollarSign />
                    </SummaryCardIcon>
                    <SummaryCardTitle>Vendas</SummaryCardTitle>
                    <SummaryCardValue>{formatCurrency(totalRevenue)}</SummaryCardValue>
                </SummaryCard>
                <SummaryCard>
                    <SummaryCardIcon>
                        <DollarSign />
                    </SummaryCardIcon>
                    <SummaryCardTitle>Vendas</SummaryCardTitle>
                    <SummaryCardValue>{formatCurrency(totayRevenue)}</SummaryCardValue>
                </SummaryCard>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <SummaryCard>
                    <SummaryCardIcon>
                        <CircleDollarSign />
                    </SummaryCardIcon>
                    <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
                    <SummaryCardValue>{totalSales}</SummaryCardValue>
                </SummaryCard>
                <SummaryCard>
                    <SummaryCardIcon>
                        <PackageIcon />
                    </SummaryCardIcon>
                    <SummaryCardTitle>Total em Estoque</SummaryCardTitle>
                    <SummaryCardValue>{totalStock}</SummaryCardValue>
                </SummaryCard>
                <SummaryCard>
                    <SummaryCardIcon>
                        <ShoppingBasketIcon />
                    </SummaryCardIcon>
                    <SummaryCardTitle>Productos</SummaryCardTitle>
                    <SummaryCardValue>{totalProducts}</SummaryCardValue>
                </SummaryCard>
            </div>
            <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
                <p className="text-2x1 font-semibold text-slate-900">Receita</p>
                <p className="text-sm text-slate-400">Últimos 14 dias</p>

            <div className="h-64 w-full">
                <RevenueChart data={totalLast14DaysRevenue} />
            </div>
            </div>
        </div>
    );
};

export default DashboardPage;
