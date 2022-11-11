class Main {
    public static void main(String[] args)
    {
        System.out.println(suma(5,2,3));

        coche miCoche = new coche();
        miCoche.SumaPuerta();
        System.out.println(miCoche.puertas);
    }

    public static int suma(int a, int b, int c)
    {
        int resultado;

        resultado = (a + b + c);
        return resultado;
    }
}
class coche
{

    public int puertas;
    public void SumaPuerta()
    {
        this.puertas++;
    }
}


