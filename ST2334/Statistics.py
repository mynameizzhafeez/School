#!/usr/bin/env python
# coding: utf-8

# In[79]:


import math
from scipy.stats import binom, nbinom, poisson, expon, geom, chi2_contingency, norm, chi2, t
from scipy import stats
from scipy import integrate
from fractions import Fraction
import numpy as np
import sympy as sp


# In[2]:


class Stat:
    @property
    def std(self):
        return self.var**0.5
    def more_than(self, x):
        return 1-self.cdf(x)
    def between(self, start, end):
        return self.cdf(end)-self.cdf(start)
    def chebyshev(self, n):
        return (self.exp-n*self.std, self.exp+n*self.std)

class B(Stat):
    def __init__(self, n, p):
        self.n = n
        self.p = p
        self.dist = stats.binom(n, p)
    @property
    def exp(self):
        return self.n*self.p
    @property
    def var(self):
        return self.n*self.p*(1-self.p)
    def cdf(self, x):
        print(f"<= {x}")
        return self.dist.cdf(x)
    def inv_cdf(self, p):
        print(f"First n such that p > {p}")
        i = 0
        total = 0
        while(True):
            total += self.pdf(i)
            if total >= p:
                return i
            i += 1
    def pdf(self, x):
        return self.dist.pmf(x)
    
class P(Stat):
    def __init__(self, L):
        self.L = L
        self.dist = stats.poisson(L)
    @property
    def exp(self):
        return self.L
    @property
    def var(self):
        return self.L
    def cdf(self, x):
        print(f"<= {x}")
        return self.dist.cdf(x)
    def inv_cdf(self, p):
        print(f"First n such that p > {p}")
        i = 0
        total = 0
        while(True):
            total += self.pdf(i)
            if total >= p:
                return i
            i += 1
    def pdf(self, x):
        return self.dist.pmf(x)
    
class NB(Stat):
    def __init__(self, k, p):
        self.k = k
        self.p = p
    @property
    def exp(self):
        return self.k/self.p
    @property
    def var(self):
        return self.k*(1-self.p)/self.p**2
    def cdf(self, x):
        print(f"<= {x}")
        total = 0
        for i in range(1, x+1):
            total += self.pdf(i)
        return total
    def inv_cdf(self, p):
        print(f"First n such that p > {p}")
        i = 1
        total = 0
        while(True):
            total += self.pdf(i)
            if total >= p:
                return i
            i += 1
    def pdf(self, x):
        return math.comb(x-1, self.k-1)*(p)**self.k*(1-p)**(x-self.k)
    
class GEOM(Stat):
    def __init__(self, p):
        self.p = p
    @property
    def exp(self):
        return (1-self.p)/self.p
    @property
    def var(self):
        return (1-self.p)/self.p**2
    def cdf(self, x):
        total = 0
        for i in range(1, x+1):
            total += self.pdf(i)
        return total
    def inv_cdf(self, p):
        print(f"First n such that p > {p}")
        i = 1
        total = 0
        while(True):
            total += self.pdf(i)
            if total >= p:
                return i
            i += 1
    def pdf(self, x):
        print(f"< {x}")
        return self.p*(1-self.p)**(x-1)
    
class EXP(Stat):
    def __init__(self, L):
        print("If average, then 1/average.")
        self.L = L
    @property
    def exp(self):
        return 1/self.L
    @property
    def var(self):
        return 1/self.L**2
    def cdf(self, x):
        return stats.expon.cdf(x, scale=1/self.L)
    def inv_cdf(self, p):
        return stats.expon.ppf(p, scale=1/self.L)
    def pdf(self, x):
        return stats.expon.pmf(x, scale=1/self.L)

class UNIFORM(Stat):
    def __init__(self, a, b):
        self.a = a
        self.b = b
    @property
    def exp(self):
        return (self.a+self.b)/2
    @property
    def var(self):
        return (self.b-self.a)**2/12
    def cdf(self, x):
        if x < self.a:
            return 0
        elif x > self.b:
            return 1
        else:
            return (x-self.a)/(self.b-self.a)
    def inv_cdf(self, p):
        return p*(self.b-self.a)+self.a
    def pdf(self, x):
        return 1/(self.b-self.a)

class NORM(Stat):
    def __init__(self, mu, sigma):
        self.mu = mu
        self.sigma = sigma
        self.dist = stats.norm(mu, sigma)
    @property
    def exp(self):
        return self.mu
    @property
    def var(self):
        return self.sigma**2
    def cdf(self, x):
        return self.dist.cdf(x)
    def inv_cdf(self, p):
        return self.dist.ppf(p)
    def pdf(self, x):
        return self.dist.pmf(x)

class CHISQUARE(Stat):
    def __init__(self, n):
        self.n = n
    @property
    def exp(self):
        return self.n
    @property
    def var(self):
        return 2*self.n
    def cdf(self, x):
        return self.chi2.cdf(x, n-1)
    def inv_cdf(self, p):
        return self.chi2.ppf(p, n-1)
    def pdf(self, x):
        return self.chi2.pdf(x, n-1)


# In[41]:


def e_mean(L1, L2):
    total = 0
    for a, b in zip(L1, L2):
        total += a*b
    return total

def e_var(L1, L2):
    mean = e_mean(L1, L2)
    total = 0
    for a, b in zip(L1, L2):
        total += (a-mean)**2*b
    return total

# Xbar
def s_mean(list_):
    return np.mean(list_)

# stdev is not known
def s_s(list_):
    mean = np.mean(list_)
    total = 0
    for item in list_:
        total += (item-mean)**2
    return (total/(len(list_)-1))**0.5

# stdev is known
def s_sigma(list_):
    mean = np.mean(list_)
    total = 0
    for item in _list:
        total += (item-mean)**2
    return (total/len(list_))**0.5

# Chi Square
def s_chi_stat(list_):
    mean = np.mean(list_)
    return [(a-mean)**2/mean for a in list_]

# Chi Square independence stat
# independence(np.array([[10, 10, 20], [20, 20, 20]]))
def independence(array):
    d = {}
    results = stats.chi2_contingency(array)
    d["chi_square"] = results[0]
    d["p_value"] = results[1]
    d["dof"] = results[2]
    d["expectation"] = results[3]
    return d

# Underlying distribution is normal or paired or std is known
def known_stat(xbar, mu, s, n):
    return (xbar-mu)/(s/n**0.5)

# Underlying distribution is not normal or paired and std is unknown
def unknown_stat(xbar, mu, s, n):
    return (xbar-mu)/(s/(n-1)**0.5)

# Underlying distribution is normal or std is known
def two_known_stat(xdiff, mudiff, s1, s2, n1, n2):
    var_ = (s1**2/n1+s2**2/n2)
    return (xdiff-mudiff)/var_**0.5

# Underlying distribution is not normal and std is unknown
def two_unknown_stat(xdiff, mudiff, s1, s2, n1, n2):
    var_ = (s1**2/(n1-1)+s2**2/(n2-1))
    return (xdiff-mudiff)/var_**0.5

# Underlying distribution is normal and std is unknown but equal
def two_equal_stat(xdiff, mudiff, s1, s2, n1, n2):
    pooled = pooled_s(s1, s2, n1, n2)
    return (xdiff-mudiff)/(pooled**2/n1+pooled**2/n2)**0.5

# Two populations are normal with same variance
def two_equal_stat_chi(s1, s2, sigma, n1, n2):
    print(f"CHISQUARE[{n1+n2-2} dof]")
    return ((n1-1)*s1**2+(n2-1)*s2**2)/sigma**2

# Used for single sigma test
def chi_stat(s, sigma, n):
    return (n-1)*s**2/sigma**2

# Used for double sigma test
def f_stat(s1, s2, sigma1, sigma2):
    return (s1**2*sigma2**2)/(s2**2*sigma1**2)

def known_var(s, n):
    return s/n**0.5

def two_known_var(s1, s2, n1, n2):
    return (s1**2/n1+s2**2/n2)**0.5

def two_equal_var(s1, s2, n1, n2):
    pooled = pooled_s(s1, s2, n1, n2)
    return (pooled**2/n1+pooled**2/n2)**0.5

def ci_z(xbar, var_, confidence):
    dev = z_mult((1-confidence)/2)*(var_)
    return (xbar-dev, xbar+dev)

def ci_t(xbar, var_, confidence, dof):
    print("DOF")
    dev = t_mult((1-confidence)/2, dof)*(var_)
    return (xbar-dev, xbar+dev)

def ci_chi(s, confidence, n):
    alpha = (1-confidence)/2
    return ((n-1)*s**2/chi_mult(n-1, alpha), (n-1)*s**2/chi_mult(n-1, 1-alpha))

def ci_f(s1, s2, confidence, n1, n2):
    f = s1**2/s2**2
    alpha = (1-confidence)/2
    mult1 = f_mult(alpha, n1, n2)[1]
    mult2 = f_mult(alpha, n2, n1)[1]
    return (f/mult1, f*mult2)

def pooled_s(s1, s2, n1, n2):
    return (((n1-1)*s1**2 + (n2-1)*s2**2)/(n1+n2-2))**0.5

def z_mult(alpha):
    print("ALPHA:", alpha)
    return stats.norm.ppf(1-alpha)

def z_p_value(x):
    return stats.norm.cdf(x)

# Test stat between t_mult(dof, a) and t_mult(dof, 1-a)
def t_mult(alpha, dof):
    print("DOF")
    return stats.t(dof).ppf(1-alpha)

def t_p_value(x, dof):
    print("DOF")
    return stats.t(dof).cdf(x)

# Test stat between chi_mult(dof, a) and chi_mult(dof, 1-a)
def chi_mult(alpha, dof):
    print("DOF")
    return stats.chi2(dof).ppf(1-alpha)

def chi_p_value(x, n):
    return stats.chi2(n-1).cdf(x)

# Test stat between f_mult(n1, a) and f_mult(n2, 1-a)
def f_mult(alpha, n1, n2):
    f = stats.f(n1-1, n2-1)
    return (f.ppf(alpha), f.ppf(1-alpha))

def f_p_value(x, n1, n2):
    return stats.f(n1-1, n2-1).cdf(x)

def power(type_2_error):
    return 1-type_2_error


# In[57]:


# TABLE([2, 4], [1, 3, 5], [0.1, 0.15, 0.2, 0.3, 0.1, 0.15])
class TABLE:
    def __init__(self, x, y, values):
        self.x = x
        self.y = y
        self.values = np.array(values).reshape((len(y), len(x)))
        print(self.values)
    def exp(self, mapper=lambda x, y: x*y):
        total = 0
        for row in range(len(self.y)):
            for col in range(len(self.x)):
                total += self.values[row][col]*mapper(self.x[col], self.y[row])
        return total
    @property
    def exp_x(self):
        return self.exp(lambda x, y: x)
    @property
    def exp_y(self):
        return self.exp(lambda x, y: y)
    @property
    def cov(self):
        return self.exp() - self.exp_x*self.exp_y
    # table.filter_(pred_x=lambda x: x==3)
    def filter_(self, pred_x=lambda x: True, pred_y=lambda y: True):
        X = []
        Y = []
        values = []
        total_value = 0
        for x in self.x:
            if pred_x(x):
                X.append(x)
        for y in self.y:
            if pred_y(y):
                Y.append(y)
        for row in range(len(self.y)):
            for col in range(len(self.x)):
                if pred_x(self.x[col]) and pred_y(self.y[row]):
                    values.append(self.values[row][col])
                    total_value += self.values[row][col]
        values = [val/total_value for val in values]
        return TABLE(X, Y, values)
    @property
    def var_x(self):
        return self.exp(lambda x, y: x**2) - (self.exp_x)**2
    @property
    def var_y(self):
        return self.exp(lambda x, y: y**2) - (self.exp_y)**2
    def var(self, a, b):
        print(f"Var({a}X + {b}Y)")
        return a**2*self.var_x + b**2*self.var_y + 2*a*b*self.cov
    @property
    def cor(self):
        return self.cov/(self.var_x*self.var_y)**0.5
    def p(self, pred_x=lambda x: True, pred_y=lambda y: True):
        total_p = 0
        for row in range(len(self.y)):
            for col in range(len(self.x)):
                if pred_x(self.x[col]) and pred_y(self.y[row]):
                    total_p += self.values[row][col]
        return total_p
    @property
    def mar_x(self):
        return [sum([self.values[row][col] for row in range(len(self.y))]) for col in range(len(self.x))]
    @property
    def mar_y(self):
        return [sum(self.values[row]) for row in range(len(self.y))]
        


# In[92]:


# INTEGRAL(lambda x, y: x*y, lambda y: [[0, y], [1, 4]])
class INTEGRAL:
    def __init__(self, f, bounds_x, bounds_y):
        self.f = f
        self.bounds_x = bounds_x
        self.bounds_y = bounds_y
    @staticmethod
    def itg(f, bounds_x, bounds_y):
        return Fraction((integrate.nquad(f, [bounds_x, bounds_y])[0])).limit_denominator()
    def integrate_between(f, a, b):
        x = sp.Symbol("x")
        return sp.integrate(f(x), (x, a, b))
    def partial_integrate_x(f, a, b):
        x = sp.Symbol("x")
        y = sp.Symbol("y")
        return sp.integrate(f(x, y), (x, a(y), b(y)))
    def partial_integrate_y(f, a, b):
        x = sp.Symbol("x")
        y = sp.Symbol("y")
        return sp.integrate(f(x, y), (y, a(x), b(x)))
    def exp(self, mapper=lambda x, y: x*y):
        g = lambda x, y: mapper(x, y)*self.f(x, y)
        return INTEGRAL.itg(g, self.bounds_x, self.bounds_y)
    @property
    def total(self):
        return INTEGRAL.itg(self.f, self.bounds_x, self.bounds_y)
    @property
    def exp_x(self):
        return self.exp(lambda x, y: x)
    @property
    def var_x(self):
        return self.exp(lambda x, y: x**2) - (self.exp_x)**2
    @property
    def exp_y(self):
        return self.exp(lambda x, y: y)
    @property
    def var_y(self):
        return self.exp(lambda x, y: y**2) - (self.exp_y)**2
    @property
    def cov(self):
        return self.exp() - self.exp_x*self.exp_y
    @property
    def cor(self):
        return self.cov/(self.var_x*self.var_y)**0.5
    def var(self, a, b):
        print(f"Var({a}X + {b}Y)")
        return a**2*self.var_x + b**2*self.var_y + 2*a*b*self.cov
    def given_x_equals(self, value):
        filtered = INTEGRAL(lambda x, y: self.f(value, y), self.bounds_x, self.bounds_y)
        normalised = INTEGRAL(lambda x, y: filtered.f(x, y)/filtered.total, filtered.bounds_x, filtered.bounds_y)
        return normalised
    def given_y_equals(self, value):
        filtered = INTEGRAL(lambda x, y: self.f(x, value), self.bounds_x, self.bounds_y)
        normalised = INTEGRAL(lambda x, y: filtered.f(x, y)/filtered.total, filtered.bounds_x, filtered.bounds_y)
        return normalised
    


# In[90]:


def comb(n, r):
    return math.comb(n, r)


# In[73]:


i = INTEGRAL(lambda x, y: (3/392)*(x**2+y**2), [3,5], [3,5])


# In[89]:
print(5)

# In[105]:
